import { array, lazy, object, optional, Schema } from '../schema';
import { Error, errorSchema } from './error';
import { Invoice, invoiceSchema } from './invoice';

/** The response returned by the `CancelInvoice` request. */
export interface CancelInvoiceResponse {
  /**
   * Stores information about an invoice. You use the Invoices API to create and manage
   * invoices. For more information, see [Invoices API Overview](https://developer.squareup.com/docs/invoices-api/overview).
   */
  invoice?: Invoice;
  /** Information about errors encountered during the request. */
  errors?: Error[];
}

export const cancelInvoiceResponseSchema: Schema<CancelInvoiceResponse> = object(
  {
    invoice: ['invoice', optional(lazy(() => invoiceSchema))],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);
