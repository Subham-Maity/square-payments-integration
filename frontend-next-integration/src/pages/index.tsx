import { useState, useEffect } from "react";
import {
  PaymentForm,
  CreditCard,
  Ach,
  GooglePay,
  GiftCard,
  Afterpay,
  CashAppPay,
} from "react-square-web-payments-sdk";

export default function Home() {
  const [amount, setAmount] = useState<number>(0);
  return (
    <div className="container mx-auto py-12 px-12 max-sm:px-6 flex flex-col gap-4">
      <input
        type="number"
        placeholder="Amount"
        className="outline-none bg-white border-2 rounded-md px-4 py-2 text-xl border-blue-400 "
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
        locationId="L2SFHHPDGQ7WE"
      >
        <CreditCard
          buttonProps={{
            css: {
              "[data-theme='dark'] &": {
                backgroundColor: "#61dafb",
                color: "var(--ifm-color-emphasis-100)",
                "&:hover": {
                  backgroundColor: "#0091ea",
                },
              },
              backgroundColor: "#771520",
              fontSize: "14px",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#530f16",
              },
            },
          }}
          style={{
            input: {
              fontSize: "14px",
            },
            "input::placeholder": {
              color: "#771520",
            },
          }}
        />

        <Ach
          accountHolderName="John Doe"
          redirectURI="https://example.com/"
          transactionId="12345"
        />
        <GiftCard
          buttonProps={{
            css: {
              "[data-theme='dark'] &": {
                backgroundColor: "#61dafb",
                color: "var(--ifm-color-emphasis-100)",
                "&:hover": {
                  backgroundColor: "#0091ea",
                },
              },
              backgroundColor: "#771520",
              fontSize: "14px",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#530f16",
              },
            },
          }}
          style={{
            input: {
              fontSize: "14px",
            },
            "input::placeholder": {
              color: "#771520",
            },
          }}
        />
      </PaymentForm>
    </div>
  );
}
