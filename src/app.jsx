// import PayRedirect from "./pages/PayRedirect";
import PayRedirect from "./pages/PayRedirect";
<Route path="/pay" element={<PayRedirect />} />
import Landing from "./pages/Landing"

function App() {
  return (
    


      <Route path="/ element={<ProviderDashboard />} />
  
  );
}

export default App;
import react from "react";
import { routes, route } from "react-router-dom";

import landing from "./pages/landing";
import provideronboarding from "./pages/provideronboarding";
import providerdashboard from "./pages/providerdashboard";
import payredirect from "./pages/payredirect";
import admin from "./pages/admin";

function app() {

  return (

    <routes>

      <route path="/" element={<landing />} />

      <route path="/provider-onboarding" element={<provideronboarding />} />

      <route path="/provider-dashboard" element={<providerdashboard />} />

      <route path="/pay" element={<payredirect />} />

      <route path="/admin" element={<admin />} />

    </routes>

  );

}

export default app;
import payment_success from "./pages/payment-success";

<Route path="/payment-success" element={<payment_success />} />
import admin_login from "./pages/admin-login";
import admin_dashboard from "./pages/admin-dashboard";

<Route path="/admin" element={<admin_login />} />

<Route path="/admin-dashboard" element={<admin_dashboard />} />
import square_redirect from "./pages/square-redirect";
import square_return from "./pages/square-return";

<route path="/pay" element={<square_redirect />} />

<route path="/return" element={<square_return />} />
<a href="/pay">

<button>

pay now

</button>

</a>
import square_redirect from "./pages/square-redirect";
import square_return from "./pages/square-return";

<route path="/pay" element={<square_redirect />} />

<route path="/return" element={<square_return />} />
