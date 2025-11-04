import React, { useEffect } from "react";

export default function Subscribe(){
  useEffect(()=>{
    const load = async () => {
      const s = document.createElement('script');
      s.src = import.meta.env.VITE_SQUARE_ENV === 'production' ? 'https://web.squarecdn.com/v1/square.js' : 'https://sandbox.web.squarecdn.com/v1/square.js';
      s.async = true;
      s.onload = async () => {
        if(!window.Square) return;
        try {
          const appId = import.meta.env.VITE_SQUARE_APPLICATION_ID;
          const locationId = import.meta.env.VITE_SQUARE_LOCATION_ID;
          const payments = window.Square.payments(appId, locationId);
          const card = await payments.card();
          await card.attach('#card-container');
          document.getElementById('card-button').addEventListener('click', async ()=> {
            const result = await card.tokenize();
            if(result.status === 'OK'){ alert('Card token created — send to server to charge (demo).'); console.log('token', result.token); }
            else alert('Payment tokenization failed');
          });
        } catch (e) { console.error(e); alert('Square init error'); }
      };
      document.body.appendChild(s);
    };
    load();
  },[]);

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow text-center">
      <h2 className="text-xl font-bold mb-3">Provider Subscription</h2>
      <p className="text-gray-600 mb-4">Subscribe for $20.99 to access provider dashboard and job calendar.</p>
      <div id="card-container" className="mb-4"></div>
      <button id="card-button" className="bg-redbrand text-white px-4 py-2 rounded">Pay $20.99</button>
      <p className="text-xs text-gray-400 mt-3">This demo uses Square Web Payments (sandbox). Configure your Square app IDs and server to charge tokens.</p>
    </div>
  );
}
