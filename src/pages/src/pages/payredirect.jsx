import { useEffect } from "react";

export default function PayRedirect() {

useEffect(() => {

window.location.href = "https://square.link/u/abcd1234";

}, []);

return <h2>Redirecting to secure payment...</h2>;

}
