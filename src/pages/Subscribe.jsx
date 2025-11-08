import React, { useEffect } from "react";

export default function Subscribe() {
  useEffect(() => {
    const loadSquare = async () => {
      const script = document.createElement("script");
      script.src = "https://sandbox.web.squarecdn.com/v1/square.js";
      script.async = true;
      script.onload = async () => {
        if (!window.Square) return alert("Square SDK failed to load.");

        const payments = window.Square.payments(
          "sandbox-sq0idp-WPiMHg7Bhu-XsyzcYPuuhw", // your current Square App ID
          "StLEBNPGTGDHEC2" // your location ID
        );

        const card = await payments.card();
        await card.attach("#card-container");

        const paymentButton = document.getElementById("card-button");
        paymentButton.addEventListener("click", async () => {
          paymentButton.disabled = true;
          const result = await card.tokenize();

          if (result.status === "OK") {
            alert("Payment token created successfully!");
            console.log("Token:", result.token);
          } else {
            alert("Payment failed: " + result.errors[0].message);
          }
          paymentButton.disabled = false;
        });
      };
      document.body.appendChild(script);
    };

    loadSquare();
  }, []);

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6 text-center">
      <h1 className="text-3xl font-bold mb-4 text-red-600">Subscribe</h1>
      <p className="text-gray-700 mb-6">
        Secure your professional plan using Square’s safe checkout.
      </p>

      <div className="space-y-4">
        <div className="p-4 border rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold">Monthly Plan</h2>
          <p className="text-gray-600 mb-2">$19.99/month</p>
          <div id="card-container" className="border p-3 rounded mb-4"></div>
          <button
            id="card-button"
            className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
          >
            Pay with Square
          </button>
        </div>
      </div>
    </div>
  );
}
