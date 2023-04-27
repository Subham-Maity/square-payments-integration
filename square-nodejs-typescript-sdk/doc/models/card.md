
# Card

Represents the payment details of a card to be used for payments. These
details are determined by the payment token generated by Web Payments SDK.

## Structure

`Card`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `id` | `string \| undefined` | Optional | Unique ID for this card. Generated by Square.<br>**Constraints**: *Maximum Length*: `64` |
| `cardBrand` | [`string \| undefined`](../../doc/models/card-brand.md) | Optional | Indicates a card's brand, such as `VISA` or `MASTERCARD`. |
| `last4` | `string \| undefined` | Optional | The last 4 digits of the card number.<br>**Constraints**: *Maximum Length*: `4` |
| `expMonth` | `bigint \| undefined` | Optional | The expiration month of the associated card as an integer between 1 and 12. |
| `expYear` | `bigint \| undefined` | Optional | The four-digit year of the card's expiration date. |
| `cardholderName` | `string \| undefined` | Optional | The name of the cardholder.<br>**Constraints**: *Maximum Length*: `96` |
| `billingAddress` | [`Address \| undefined`](../../doc/models/address.md) | Optional | Represents a postal address in a country.<br>For more information, see [Working with Addresses](https://developer.squareup.com/docs/build-basics/working-with-addresses). |
| `fingerprint` | `string \| undefined` | Optional | Intended as a Square-assigned identifier, based<br>on the card number, to identify the card across multiple locations within a<br>single application.<br>**Constraints**: *Maximum Length*: `255` |
| `customerId` | `string \| undefined` | Optional | **Required** The ID of a customer created using the Customers API to be associated with the card. |
| `merchantId` | `string \| undefined` | Optional | The ID of the merchant associated with the card. |
| `referenceId` | `string \| undefined` | Optional | An optional user-defined reference ID that associates this card with<br>another entity in an external system. For example, a customer ID from an<br>external customer management system.<br>**Constraints**: *Maximum Length*: `128` |
| `enabled` | `boolean \| undefined` | Optional | Indicates whether or not a card can be used for payments. |
| `cardType` | [`string \| undefined`](../../doc/models/card-type.md) | Optional | Indicates a card's type, such as `CREDIT` or `DEBIT`. |
| `prepaidType` | [`string \| undefined`](../../doc/models/card-prepaid-type.md) | Optional | Indicates a card's prepaid type, such as `NOT_PREPAID` or `PREPAID`. |
| `bin` | `string \| undefined` | Optional | The first six digits of the card number, known as the Bank Identification Number (BIN). Only the Payments API<br>returns this field.<br>**Constraints**: *Maximum Length*: `6` |
| `version` | `bigint \| undefined` | Optional | Current version number of the card. Increments with each card update. Requests to update an<br>existing Card object will be rejected unless the version in the request matches the current<br>version for the Card. |
| `cardCoBrand` | [`string \| undefined`](../../doc/models/card-co-brand.md) | Optional | Indicates the brand for a co-branded card. |

## Example (as JSON)

```json
{
  "id": "id0",
  "card_brand": "OTHER_BRAND",
  "last_4": "last_42",
  "exp_month": 42,
  "exp_year": 254,
  "cardholder_name": "cardholder_name4",
  "billing_address": {
    "address_line_1": "address_line_12",
    "address_line_2": "address_line_28",
    "address_line_3": "address_line_34",
    "locality": "locality8",
    "sublocality": "sublocality8",
    "sublocality_2": "sublocality_26",
    "sublocality_3": "sublocality_38",
    "administrative_district_level_1": "administrative_district_level_12",
    "administrative_district_level_2": "administrative_district_level_26",
    "administrative_district_level_3": "administrative_district_level_36",
    "postal_code": "postal_code0",
    "country": "MG",
    "first_name": "first_name8",
    "last_name": "last_name6"
  },
  "fingerprint": "fingerprint6",
  "customer_id": "customer_id8",
  "merchant_id": "merchant_id0",
  "reference_id": "reference_id2",
  "enabled": false,
  "card_type": "DEBIT",
  "prepaid_type": "UNKNOWN_PREPAID_TYPE",
  "bin": "bin0",
  "version": 172,
  "card_co_brand": "UNKNOWN"
}
```
