import { useState, useEffect } from "react";
import {
  GooglePay,
  PaymentForm,
  CreditCard,
} from "react-square-web-payments-sdk";

export default function Home() {
  const [amount, setAmount] = useState<number>(0);
  return (
    <div className="container mx-auto py-12 px-12 max-sm:px-6 flex flex-col gap-4 bg-gray-800 text-white">
      <input
        type="number"
        placeholder="Amount"
        className="outline-none bg-gray-700 border-2 rounded-md px-4 py-2 text-xl border-purple-400 text-white"
        value={amount}
        onChange={(e: any) => {
          setAmount(e.target.value);
        }}
      />
      <PaymentForm
        applicationId="sandbox-sq0idb-tAWejHTPg022h3j-G00tww"
        cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
          const response = await fetch("/api/payment", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              sourceId: token.token,
              payment_amount: amount,
            }),
          });
          console.log(await response.json());
        }}
        locationId="LB6KD73BNFPA9"
        className="rounded-md"
      >
        {" "}
        <div>
          <CreditCard className="rounded-md" />
        </div>
      </PaymentForm>
    </div>
  );
}
