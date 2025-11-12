import React from "react";
import { auth, db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";

export default function Subscribe() {
  const handleClick = () => {
    // Redirect to your Square-hosted checkout
    window.open(import.meta.env.VITE_SQUARE_SITE_URL || "https://1clikfixsquare.square.site", "_blank");
  };

  const markSubscribed = async () => {
    const user = auth.currentUser;
    if (!user) return alert("Log in first.");
    try {
      await updateDoc(doc(db, "providers", user.uid), { subscribed: true });
      alert("Marked subscribed (manual).");
    } catch (err) {
      console.error(err);
      alert("Error: " + err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto card text-center">
      <h2 className="text-xl font-bold text-brandRed mb-3">Subscribe</h2>
      <p className="text-gray-300 mb-4">Click below to open the Square checkout. After payment return to provider portal.</p>
      <div className="flex gap-2 justify-center">
        <button onClick={handleClick} className="btn btn-primary">Open Square Checkout</button>
        <button onClick={markSubscribed} className="btn bg-gray-700">Mark Subscribed (manual)</button>
      </div>
    </div>
  );
}
