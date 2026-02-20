import { useEffect } from "react";

export default function square_redirect() {

  useEffect(() => {

    window.location.href = "https://square.link/u/YOUR_PAYMENT_LINK";

  }, []);

  return (
    <div>
      redirecting to secure payment...
    </div>
  );

}
