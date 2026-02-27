import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function admin_dashboard() {

  const navigate = useNavigate();

  useEffect(() => {

    const auth = sessionStorage.getItem("admin_auth");

    if (auth !== "true") {

      navigate("/");

    }

  }, []);

  return (

    <div>

      <h1>admin dashboard</h1>

      <p>you now have full access</p>

    </div>

  );

}
