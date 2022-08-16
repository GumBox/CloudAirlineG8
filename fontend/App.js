import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Service_Contact from "./Pages/Service/Service_Contact";
import Ticket from "./Pages/Ticket/Ticket";
import InfomationCustomer from "./Pages/Ticket/InformationCustomer";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="service_contact" element={< Service_Contact />} />
          <Route path="ticket" element={< Ticket />} />
          <Route path="/ticket/infcustomer" element={< InfomationCustomer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
