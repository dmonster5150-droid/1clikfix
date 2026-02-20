import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function admin_login() {

  const [password, set_password] = useState("");
  const navigate = useNavigate();

  function handle_login() {

    if (password === "Sikkmade666$") {

      sessionStorage.setItem("admin_auth", "true");

      navigate("/admin-dashboard");

    } else {

      alert("access denied");

    }

  }

  return (

    <div>

      <h2>admin access</h2>

      <input
        type="password"
        placeholder="enter password"
        value={password}
        onChange={(e) => set_password(e.target.value)}
      />

      <button onClick={handle_login}>
        login
      </button>

    </div>

  );

}
