import React from "react";

type PaymentFormProps = {};

export const PaymentForm: React.FC<PaymentFormProps> = () => {
  const handlePaymentMethodSubmission = async (
    event: React.FormEvent<HTMLFormElement>,
    paymentMethod: any, // TODO: Replace with the type of your payment method object
    options: any // TODO: Replace with the type of your options object
  ) => {
    event.preventDefault();

    try {
      // TODO: Implement tokenization and payment logic here
    } catch (e) {
      console.error(e.message);
    }
  };

  const handleCardButtonClick = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // TODO: Implement handlePaymentMethodSubmission with the card payment method
  };

  const handleACHButtonClick = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // TODO: Implement handlePaymentMethodSubmission with the ACH payment method
  };

  const handlePaymentFormSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
  };

  return (
    <form id="payment-form" onSubmit={handlePaymentFormSubmit}>
      <fieldset className="buyer-inputs">
        <input
          type="text"
          autoComplete="given-name"
          aria-required={true}
          aria-label="First Name"
          required={true}
          placeholder="Given Name"
          name="givenName"
          spellCheck={false}
        />

        <input
          type="text"
          autoComplete="family-name"
          aria-required={true}
          aria-label="Last Name"
          required={true}
          placeholder="Family Name"
          name="familyName"
          spellCheck={false}
        />
      </fieldset>

      <button id="card-button" type="button" onClick={handleCardButtonClick}>
        Pay with Card
      </button>

      <button id="ach-button" type="button" onClick={handleACHButtonClick}>
        Pay with Bank Account
      </button>

      <div id="card-container"></div>
      <div id="payment-status-container"></div>
    </form>
  );
};
