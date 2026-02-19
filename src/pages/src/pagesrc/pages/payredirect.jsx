import { useeffect } from "react";

export default function payredirect() {

  useeffect(() => {

    window.location.href = "https://square.link/u/abcd1234";

  }, []);

  return <h2>redirecting to secure payment...</h2>;

}
