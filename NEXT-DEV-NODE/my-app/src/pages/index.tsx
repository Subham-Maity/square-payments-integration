import React from "react";
import { PaymentForm } from "../components/PaymentForm";
import { Google } from "../components/Google";

type PaymentPageProps = {};

const PaymentPage: React.FC<PaymentPageProps> = () => {
  return (
    <div>
      <h1>Payment Page</h1>
      <PaymentForm />
      <Google />
    </div>
  );
};

export default PaymentPage;
