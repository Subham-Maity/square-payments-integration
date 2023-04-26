import { Client } from "square";
import { randomUUID } from "crypto";

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

const { paymentsApi } = new Client({
  accessToken:
    "EAAAEPTpSv5356UJQl9AufEVAnvO2sy-G7JrGrkk1O4czdAQqWHGWuLj0zKbnmyn",
  environment: "sandbox" as any,
});

export default async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const { result } = await paymentsApi.createPayment({
      idempotencyKey: randomUUID(),
      sourceId: req.body.sourceId,
      amountMoney: {
        currency: "INR",
        amount: req.body.payment_amount as any,
      },
    });
    console.log(result);
    res.status(200).json(result);
  } else {
    res.status(500).send();
  }
}
