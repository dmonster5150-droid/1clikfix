import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";

export default function ProviderSubscribe(){
  const nav = useNavigate();
  const SQUARE_LINK = import.meta.env.VITE_SQUARE_SUBSCRIBE_URL || "https://square.link/u/LYi1osGx?src=embed";

  useEffect(()=>{
    // If user already has subscription flag, send them to onboarding/dashboard
    if(localStorage.getItem('subscriptionPaid') === 'true'){
      nav('/provider-dashboard');
    }
  },[]);

  function showCheckoutWindow(e){
    e.preventDefault();
    const url = document.getElementById('embedded-checkout-modal-checkout-button').getAttribute('data-url');
    const title = 'Square Payment Links';
    const topWindow = window.top ? window.top : window;
    const dualScreenLeft = topWindow.screenLeft !== undefined ? topWindow.screenLeft : topWindow.screenX;
    const dualScreenTop = topWindow.screenTop !== undefined ? topWindow.screenTop : topWindow.screenY;
    const width = topWindow.innerWidth || document.documentElement.clientWidth || screen.width;
    const height = topWindow.innerHeight || document.documentElement.clientHeight || screen.height;
    const h = height * .75;
    const w = 500;
    const systemZoom = width / topWindow.screen.availWidth;
    const left = (width - w) / 2 / systemZoom + dualScreenLeft;
    const top = (height - h) / 2 / systemZoom + dualScreenTop;
    const newWindow = window.open(url, title, `scrollbars=yes, width=${w / systemZoom}, height=${h / systemZoom}, top=${top}, left=${left}`);
    if (window.focus) newWindow.focus();
  }

  useEffect(()=>{
    const btn = document.getElementById('embedded-checkout-modal-checkout-button');
    if(btn){
      btn.addEventListener('click', showCheckoutWindow);
      return ()=>btn.removeEventListener('click', showCheckoutWindow);
    }
  },[]);

  return (
    <div className="card">
      <h1>Provider subscription — $35.99</h1>
      <p className="small">Subscribe to get access to available jobs and the provider calendar.</p>

      <div style={{marginTop:20, marginBottom:20, padding:16, background:'#fff3cd', borderRadius:8, border:'1px solid #ffc107'}}>
        <p style={{margin:0, fontSize:14, lineHeight:1.5}}>
          <strong>Before subscribing you acknowledge and agree to the following terms:</strong>
          <br/>
          Provider must have 3+ yrs exp. as a handyman, have transportation, have all necessary tools, speak English, have CA DL.
        </p>
      </div>

      <div style={{maxWidth:320, marginTop:12}}>
        <div style={{overflow:'auto', display:'flex', flexDirection:'column', alignItems:'center', background:'#fff', borderRadius:10, padding:8}}>
          <div style={{padding:12}}>
            <a
              id="embedded-checkout-modal-checkout-button"
              className="button"
              target="_blank"
              data-url={SQUARE_LINK}
              href={SQUARE_LINK}
              rel="noreferrer"
            >
              Subscribe $35.99
            </a>
          </div>
          <div className="small">After payment you'll be redirected to onboarding.</div>
        </div>
      </div>

      <div style={{marginTop:16}} className="small">
        <strong>Important:</strong> Square redirect must target: <code>https://1clikfixx.netlify.app/provider-onboarding?paid=true</code>
      </div>
    </div>
  );
}
