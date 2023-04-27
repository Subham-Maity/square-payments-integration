import {
  array,
  boolean,
  lazy,
  nullable,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import { Card, cardSchema } from './card';
import {
  CardPaymentTimeline,
  cardPaymentTimelineSchema,
} from './cardPaymentTimeline';
import { DeviceDetails, deviceDetailsSchema } from './deviceDetails';
import { Error, errorSchema } from './error';

/** Reflects the current status of a card payment. Contains only non-confidential information. */
export interface CardPaymentDetails {
  /**
   * The card payment's current state. The state can be AUTHORIZED, CAPTURED, VOIDED, or
   * FAILED.
   */
  status?: string | null;
  /**
   * Represents the payment details of a card to be used for payments. These
   * details are determined by the payment token generated by Web Payments SDK.
   */
  card?: Card;
  /**
   * The method used to enter the card's details for the payment. The method can be
   * `KEYED`, `SWIPED`, `EMV`, `ON_FILE`, or `CONTACTLESS`.
   */
  entryMethod?: string | null;
  /**
   * The status code returned from the Card Verification Value (CVV) check. The code can be
   * `CVV_ACCEPTED`, `CVV_REJECTED`, or `CVV_NOT_CHECKED`.
   */
  cvvStatus?: string | null;
  /**
   * The status code returned from the Address Verification System (AVS) check. The code can be
   * `AVS_ACCEPTED`, `AVS_REJECTED`, or `AVS_NOT_CHECKED`.
   */
  avsStatus?: string | null;
  /**
   * The status code returned by the card issuer that describes the payment's
   * authorization status.
   */
  authResultCode?: string | null;
  /** For EMV payments, the application ID identifies the EMV application used for the payment. */
  applicationIdentifier?: string | null;
  /** For EMV payments, the human-readable name of the EMV application used for the payment. */
  applicationName?: string | null;
  /** For EMV payments, the cryptogram generated for the payment. */
  applicationCryptogram?: string | null;
  /**
   * For EMV payments, the method used to verify the cardholder's identity. The method can be
   * `PIN`, `SIGNATURE`, `PIN_AND_SIGNATURE`, `ON_DEVICE`, or `NONE`.
   */
  verificationMethod?: string | null;
  /**
   * For EMV payments, the results of the cardholder verification. The result can be
   * `SUCCESS`, `FAILURE`, or `UNKNOWN`.
   */
  verificationResults?: string | null;
  /**
   * The statement description sent to the card networks.
   * Note: The actual statement description varies and is likely to be truncated and appended with
   * additional information on a per issuer basis.
   */
  statementDescription?: string | null;
  /** Details about the device that took the payment. */
  deviceDetails?: DeviceDetails;
  /** The timeline for card payments. */
  cardPaymentTimeline?: CardPaymentTimeline;
  /**
   * Whether the card must be physically present for the payment to
   * be refunded.  If set to `true`, the card must be present.
   */
  refundRequiresCardPresence?: boolean | null;
  /** Information about errors encountered during the request. */
  errors?: Error[] | null;
}

export const cardPaymentDetailsSchema: Schema<CardPaymentDetails> = object({
  status: ['status', optional(nullable(string()))],
  card: ['card', optional(lazy(() => cardSchema))],
  entryMethod: ['entry_method', optional(nullable(string()))],
  cvvStatus: ['cvv_status', optional(nullable(string()))],
  avsStatus: ['avs_status', optional(nullable(string()))],
  authResultCode: ['auth_result_code', optional(nullable(string()))],
  applicationIdentifier: [
    'application_identifier',
    optional(nullable(string())),
  ],
  applicationName: ['application_name', optional(nullable(string()))],
  applicationCryptogram: [
    'application_cryptogram',
    optional(nullable(string())),
  ],
  verificationMethod: ['verification_method', optional(nullable(string()))],
  verificationResults: ['verification_results', optional(nullable(string()))],
  statementDescription: ['statement_description', optional(nullable(string()))],
  deviceDetails: ['device_details', optional(lazy(() => deviceDetailsSchema))],
  cardPaymentTimeline: [
    'card_payment_timeline',
    optional(lazy(() => cardPaymentTimelineSchema)),
  ],
  refundRequiresCardPresence: [
    'refund_requires_card_presence',
    optional(nullable(boolean())),
  ],
  errors: ['errors', optional(nullable(array(lazy(() => errorSchema))))],
});