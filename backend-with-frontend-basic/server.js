const { createError, json, send } = require('micro');

const { router, get, post } = require('microrouter');

const staticHandler = require('serve-handler');

const retry = require('async-retry');

const logger = require('./server/logger');

const {
  validatePaymentPayload,
  validateCreateCardPayload,
} = require('./server/schema');

const { ApiError, client: square } = require('./server/square');

const crypto = require('crypto');

async function createPayment(req, res) {
  const payload = await json(req);
  logger.debug(JSON.stringify(payload));

  if (!validatePaymentPayload(payload)) {
    throw createError(400, 'Bad Request');
  }

  const idempotencyKey = crypto.randomUUID();

  await retry(async (bail, attempt) => {
    try {
      logger.debug('Creating payment', { attempt });

      const payment = {
        idempotencyKey,
        locationId: payload.locationId,
        sourceId: payload.sourceId,

        amountMoney: {
          amount: '100',
          currency: 'USD',
        },
      };

      if (payload.customerId) {
        payment.customerId = payload.customerId;
      }

      if (payload.verificationToken) {
        payment.verificationToken = payload.verificationToken;
      }

      const { result, statusCode } = await square.paymentsApi.createPayment(
        payment
      );

      logger.info('Payment succeeded!', { result, statusCode });
      send(res, statusCode, {
        success: true,
        payment: {
          id: result.payment.id,
          status: result.payment.status,
          receiptUrl: result.payment.receiptUrl,
          orderId: result.payment.orderId,
        },
      });
    } catch (ex) {
      if (ex instanceof ApiError) {
        logger.error(ex.errors);
        bail(ex);
      } else {
        logger.error(`Error creating payment on attempt ${attempt}: ${ex}`);
        throw ex;
      }
    }
  });
}
async function storeCard(req, res) {
  const payload = await json(req);

  if (!validateCreateCardPayload(payload)) {
    throw createError(400, 'Bad Request');
  }

  const idempotencyKey = crypto.randomUUID();

  await retry(async (bail, attempt) => {
    try {
      logger.debug('Storing card', { attempt });

      const cardReq = {
        idempotencyKey,
        sourceId: payload.sourceId,
        card: {
          customerId: payload.customerId,
        },
      };

      if (payload.verificationToken) {
        cardReq.verificationToken = payload.verificationToken;
      }
      const { result, statusCode } = await square.cardsApi.createCard(cardReq);
      logger.info('Store Card succeeded!', { result, statusCode });
      delete result.card.expMonth;
      delete result.card.expYear;
      send(res, statusCode, {
        success: true,
        card: result.card,
      });
    } catch (ex) {
      if (ex instanceof ApiError) {
        logger.error(ex.errors);
        bail(ex);
      } else {
        logger.error(
          `Error creating card-on-file on attempt ${attempt}: ${ex}`
        );
        throw ex;
      }
    }
  });
}
async function serveStatic(req, res) {
  logger.debug('Handling request', req.path);
  await staticHandler(req, res, {
    public: 'public',
  });
}
module.exports = router(
  post('/payment', createPayment),
  post('/card', storeCard),
  get('/*', serveStatic)
);
