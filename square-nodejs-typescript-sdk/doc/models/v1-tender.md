
# V1 Tender

A tender represents a discrete monetary exchange. Square represents this
exchange as a money object with a specific currency and amount, where the
amount is given in the smallest denomination of the given currency.

Square POS can accept more than one form of tender for a single payment (such
as by splitting a bill between a credit card and a gift card). The `tender`
field of the Payment object lists all forms of tender used for the payment.

Split tender payments behave slightly differently from single tender payments:

The receipt_url for a split tender corresponds only to the first tender listed
in the tender field. To get the receipt URLs for the remaining tenders, use
the receipt_url fields of the corresponding Tender objects.

*A note on gift cards**: when a customer purchases a Square gift card from a
merchant, the merchant receives the full amount of the gift card in the
associated payment.

When that gift card is used as a tender, the balance of the gift card is
reduced and the merchant receives no funds. A `Tender` object with a type of
`SQUARE_GIFT_CARD` indicates a gift card was used for some or all of the
associated payment.

## Structure

`V1Tender`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | The tender's unique ID. |
| `type` | [`string \| undefined`](../../doc/models/v1-tender-type.md) | Optional | - |
| `name` | `string \| undefined` | Optional | A human-readable description of the tender. |
| `employeeId` | `string \| undefined` | Optional | The ID of the employee that processed the tender. |
| `receiptUrl` | `string \| undefined` | Optional | The URL of the receipt for the tender. |
| `cardBrand` | [`string \| undefined`](../../doc/models/v1-tender-card-brand.md) | Optional | The brand of a credit card. |
| `panSuffix` | `string \| undefined` | Optional | The last four digits of the provided credit card's account number. |
| `entryMethod` | [`string \| undefined`](../../doc/models/v1-tender-entry-method.md) | Optional | - |
| `paymentNote` | `string \| undefined` | Optional | Notes entered by the merchant about the tender at the time of payment, if any. Typically only present for tender with the type: OTHER. |
| `totalMoney` | [`V1Money \| undefined`](../../doc/models/v1-money.md) | Optional | - |
| `tenderedMoney` | [`V1Money \| undefined`](../../doc/models/v1-money.md) | Optional | - |
| `tenderedAt` | `string \| undefined` | Optional | The time when the tender was created, in ISO 8601 format. |
| `settledAt` | `string \| undefined` | Optional | The time when the tender was settled, in ISO 8601 format. |
| `changeBackMoney` | [`V1Money \| undefined`](../../doc/models/v1-money.md) | Optional | - |
| `refundedMoney` | [`V1Money \| undefined`](../../doc/models/v1-money.md) | Optional | - |
| `isExchange` | `boolean \| undefined` | Optional | Indicates whether or not the tender is associated with an exchange. If is_exchange is true, the tender represents the value of goods returned in an exchange not the actual money paid. The exchange value reduces the tender amounts needed to pay for items purchased in the exchange. |

## Example (as JSON)

```json
{
  "id": "id0",
  "type": "UNKNOWN",
  "name": "name0",
  "employee_id": "employee_id0",
  "receipt_url": "receipt_url8",
  "card_brand": "OTHER_BRAND",
  "pan_suffix": "pan_suffix0",
  "entry_method": "OTHER",
  "payment_note": "payment_note8",
  "total_money": {
    "amount": 250,
    "currency_code": "USS"
  },
  "tendered_money": {
    "amount": 102,
    "currency_code": "UNKNOWN_CURRENCY"
  },
  "tendered_at": "tendered_at6",
  "settled_at": "settled_at4",
  "change_back_money": {
    "amount": 78,
    "currency_code": "JMD"
  },
  "refunded_money": {
    "amount": 214,
    "currency_code": "CHW"
  },
  "is_exchange": false
}
```
