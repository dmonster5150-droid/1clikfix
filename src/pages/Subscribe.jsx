import React from "react";
import { useNavigate } from "react-router-dom";

export default function Subscribe(){
  const nav = useNavigate();
  const goToSquare = () => {
    window.open("https://1clikfixsquare.square.site/", "_blank");
  };

  return (
    <div className="container" style={{maxWidth:720}}>
      <div className="card">
        <h2>Provider Subscription</h2>
        <p>Providers must subscribe to access the calendar & job assignment tools. After subscribing via Square, create your provider profile.</p>
        <div style={{display:'flex', gap:10}}>
          <button onClick={goToSquare}>Subscribe via Square</button>
          <button onClick={()=>nav("/provider-profile")} className="secondary">Back</button>
        </div>
      </div>
    </div>
  );
}
