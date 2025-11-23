import React, { useEffect } from "react";
import { auth, db } from "../firebase";
import { doc, updateDoc } from "firebase/firestore";

export default function Subscribe() {
  const SQUARE_LINK = "https://square.link/u/03HDu68S?src=embed";

  useEffect(() => {
    const btn = document.getElementById('embedded-checkout-modal-checkout-button');
    if (btn) {
      btn.addEventListener('click', showCheckoutWindow);
      return () => btn.removeEventListener('click', showCheckoutWindow);
    }
  }, []);

  function showCheckoutWindow(e) {
    e.preventDefault();

    const url = document.getElementById('embedded-checkout-modal-checkout-button').getAttribute('data-url');
    const title = 'Square Payment Links';

    // Some platforms embed in an iframe, so we want to top window to calculate sizes correctly
    const topWindow = window.top ? window.top : window;

    // Fixes dual-screen position                                Most browsers          Firefox
    const dualScreenLeft = topWindow.screenLeft !== undefined ? topWindow.screenLeft : topWindow.screenX;
    const dualScreenTop = topWindow.screenTop !== undefined ? topWindow.screenTop : topWindow.screenY;

    const width = topWindow.innerWidth ? topWindow.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
    const height = topWindow.innerHeight ? topWindow.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

    const h = height * .75;
    const w = 500;

    const systemZoom = width / topWindow.screen.availWidth;
    const left = (width - w) / 2 / systemZoom + dualScreenLeft;
    const top = (height - h) / 2 / systemZoom + dualScreenTop;
    const newWindow = window.open(url, title, `scrollbars=yes, width=${w / systemZoom}, height=${h / systemZoom}, top=${top}, left=${left}`);

    if (window.focus) newWindow.focus();
  }

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
      <p className="text-gray-300 mb-4">Click below to complete payment. After payment return to provider portal.</p>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: '0 auto',
        maxWidth: '259px',
        background: '#FFFFFF',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: '-2px 10px 5px rgba(0, 0, 0, 0)',
        borderRadius: '10px',
        fontFamily: 'SQ Market, SQ Market, Helvetica, Arial, sans-serif'
      }}>
        <div style={{ padding: '20px' }}>
          <p style={{ fontSize: '18px', lineHeight: '20px' }}>1ciksubscribe</p>
          <p style={{ fontSize: '18px', lineHeight: '20px', fontWeight: 600 }}>$35.99</p>
          <a
            id="embedded-checkout-modal-checkout-button"
            target="_blank"
            data-url={SQUARE_LINK}
            href={SQUARE_LINK}
            rel="noreferrer"
            style={{
              display: 'inline-block',
              fontSize: '18px',
              lineHeight: '48px',
              height: '48px',
              color: '#000000',
              minWidth: '212px',
              backgroundColor: '#d9d9d9',
              textAlign: 'center',
              boxShadow: '0 0 0 1px rgba(0,0,0,.1) inset',
              borderRadius: '6px',
              textDecoration: 'none'
            }}
          >
            Pay now
          </a>
        </div>
      </div>

      <div className="mt-4">
        <button onClick={markSubscribed} className="btn bg-gray-700">Mark Subscribed (manual)</button>
      </div>
    </div>
  );
}
