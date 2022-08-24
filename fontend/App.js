import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Service_Contact from "./Pages/Service/Service_Contact";
import Ticket from "./Pages/Ticket/Ticket";
import InfomationCustomer from "./Pages/Ticket/InformationCustomer";
import SupportServices from "./Pages/Ticket/SupportServices";
import Seat from "./Pages/Ticket/Seat";
import Company from "./Pages/Introduce/Company";
import Plane from "./Pages/Introduce/Plane";
import Partner from "./Pages/Introduce/Partner"
import TermsAndCondition from "./Pages/Rule/TermsAndCondition"
import ProtectInf from "./Pages/Rule/ProtectInf";

import Endow from "./Pages/Endow";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="service_contact" element={< Service_Contact />} />
          <Route path="ticket" element={< Ticket />} />
          <Route path="/ticket/infcustomer" element={< InfomationCustomer />} />
          <Route path="/ticket/spServices" element={< SupportServices />} />
          <Route path="/ticket/seat" element={< Seat />} />
          <Route path="company" element={< Company />} />
          <Route path="plane" element={< Plane />} />
          <Route path="partner" element={< Partner />} />
          <Route path="termsandcondition" element={< TermsAndCondition />} />
          <Route path="protectinf" element={< ProtectInf />} />
          <Route path="endow" element={<Endow />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
