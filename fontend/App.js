import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Service_Contact from "./Pages/Service/Service_Contact";
import Ticket from "./Pages/Ticket/Ticket";
import InfomationCustomer from "./Pages/Ticket/InformationCustomer";
import SupportServices from "./Pages/Ticket/SupportServices";
import Seat from "./Pages/Ticket/Seat";


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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
