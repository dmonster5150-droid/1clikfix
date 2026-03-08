import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isPaidUser } from "../lib/paymentlock";

function Calendar() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isPaidUser()) {
      navigate("/pay");
    }
  }, [navigate]);

  return (
    <div style={{ padding: "40px" }}>
      <h1>Provider Calendar</h1>
      <p>Your booking schedule will appear here.</p>
    </div>
  );
}

export default Calendar;
