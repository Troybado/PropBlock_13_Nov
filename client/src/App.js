import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PropertyFunc from "./Functions/PropertyFunc";
import SignUp from "./pages/Signup";
import AgreementFunc from "./Functions/AgreementFunc";
import Properties from "./pages/Properties_2";
import Buy from "./pages/Buy";
import Property from "./pages/Property";
import NoMatch from "./pages/NoMatch";
import Scrollbar from "smooth-scrollbar";
import Aboutus from "./pages/Aboutus";
import ProtectedRoute from "./ProtectedRoute";
import FAQ from "./pages/FAQ";
import MainContainer from "./pages/MainContainer/MainContainer";
import TermsAndConditions from "./pages/TermsAndConditions";
import ContactUs from "./pages/ContactUs";
import GovtDashboard from "./pages/MainContainerGovt/MainContainer";
import ProtectedRouteGovernment from "./ProtectedRouteGovernment";
import HowPropBlockWorks from "./pages/HowPropBlockWorks";
import AgreementView from "./pages/MainContainer/AgreementView";
import Test from "./pages/Test.jsx"

function App() {
  let optionsForScroll = {
    damping: "0.2",
  };
  Scrollbar.init(document.querySelector("body"), optionsForScroll);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/buy" element={<Buy />}></Route>
        <Route path="/aboutus" element={<Aboutus />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/FAQ" element={<FAQ />}></Route>
        <Route path="/test" element={<Test></Test>}></Route>
        <Route
          path="/Terms&Conditions"
          element={<TermsAndConditions />}
        ></Route>
        <Route path="/ContactUs" element={<ContactUs />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Agreement/:id" element={<AgreementView />}></Route>
        <Route
          exact
          path="/government"
          element={<ProtectedRouteGovernment component={<GovtDashboard />} />}
        />
        <Route path="/PropertyFunctions" element={<PropertyFunc />}></Route>
        <Route path="/AgreementFunctions" element={<AgreementFunc />}></Route>
        <Route
          path="/HowPropBlockWorks"
          element={<HowPropBlockWorks />}
        ></Route>
        <Route path="/properties" element={<Properties />}></Route>
        <Route path="/property/:id" element={<Property />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
        <Route
          exact
          path="/dashboard"
          element={<ProtectedRoute component={<MainContainer />} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
