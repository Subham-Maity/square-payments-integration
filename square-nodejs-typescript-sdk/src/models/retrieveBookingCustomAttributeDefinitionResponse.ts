import { array, lazy, object, optional, Schema } from '../schema';
import {
  CustomAttributeDefinition,
  customAttributeDefinitionSchema,
} from './customAttributeDefinition';
import { Error, errorSchema } from './error';

/**
 * Represents a [RetrieveBookingCustomAttributeDefinition]($e/BookingCustomAttributes/RetrieveBookingCustomAttributeDefinition) response.
 * Either `custom_attribute_definition` or `errors` is present in the response.
 */
export interface RetrieveBookingCustomAttributeDefinitionResponse {
  /**
   * Represents a definition for custom attribute values. A custom attribute definition
   * specifies the key, visibility, schema, and other properties for a custom attribute.
   */
  customAttributeDefinition?: CustomAttributeDefinition;
  /** Any errors that occurred during the request. */
  errors?: Error[];
}

export const retrieveBookingCustomAttributeDefinitionResponseSchema: Schema<RetrieveBookingCustomAttributeDefinitionResponse> = object(
  {
    customAttributeDefinition: [
      'custom_attribute_definition',
      optional(lazy(() => customAttributeDefinitionSchema)),
    ],
    errors: ['errors', optional(array(lazy(() => errorSchema)))],
  }
);