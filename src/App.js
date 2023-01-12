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
import Customer_Care from "./Pages/Service/Customer_Care";
import Question from "./Pages/Service/Question";
import Contact from "./Pages/Service/Contact";
import Socialnetwork from "./Pages/Service/Socialnetwork";
import Protect_Customers from "./Pages/Service/Protect_Customers";
import Baggage_Information from "./Pages/Useful_Information/Baggage_Information";
import Purchase_Guide from "./Pages/Useful_Information/Purchase_Guide";
import Taxes_Surcharges from "./Pages/Useful_Information/Taxes_Surcharges";
import InfoTravel from "./Pages/Menu/InfoTravel";
import Service_menu from "./Pages/Menu/Service";
import Introduce from "./Pages/Menu/Introduce";
import Checkin from "./Pages/Menu/Infoplus/Checkin";
import Airport from "./Pages/Menu/Infoplus/Airport";
import Endow from "./Pages/Endow";
import User1 from "./Pages/Payment/User1";
import Layout1 from "./Pages/Payment/Layout1";
import UserEdit1 from "./Pages/Payment/UserEdit1";
import Home1 from "./Pages/Payment/Home1";
import Confirm_Payment from "./Pages/Payment/Confirm_payment";




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
          <Route path="/L1" element={<Layout1 />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="user/:id" element={<User1 />} />
          <Route path="useredit/:id" element={<UserEdit1 />} />
          <Route path="confirmpayment" element={<Confirm_Payment />} />
          <Route path="plane" element={< Plane />} />
          <Route path="partner" element={< Partner />} />
          <Route path="termsandcondition" element={< TermsAndCondition />} />
          <Route path="protectinf" element={< ProtectInf />} />
          <Route path="endow" element={<Endow />} />
          <Route path="customer_care" element={< Customer_Care />} />
          <Route path="question" element={< Question />} />
          <Route path="contact" element={< Contact/>} />
          <Route path="socialnetwork" element={< Socialnetwork />} />
          <Route path="protectcustomers" element={< Protect_Customers />} />
          <Route path="baggage" element={< Baggage_Information />} />
          <Route path="guide" element={< Purchase_Guide />} />
          <Route path="Taxes_Surcharges" element={< Taxes_Surcharges />} />
          <Route path="infotravel" element={< InfoTravel />} />
          <Route path="servicemenu" element={< Service_menu />} />
          <Route path="introduce" element={<Introduce/>}/>
          <Route path="checkin" element={<Checkin/>}/>
          <Route path="airport" element={<Airport/>}/>
          
          
          

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
