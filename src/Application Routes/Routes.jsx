import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Screens/UserScreen/Home/Home";
import SingleDebate from "../Screens/UserScreen/SingleDebate/SingleDebate";
import Tags from "../Screens/UserScreen/Tags.jsx/Tags";
import UserDashboard from "../Screens/UserScreen/UserDashboard/UserDashboard";
import Tour from "../Screens/UserScreen/Tour.jsx/Tour";
import Search from "../Screens/UserScreen/Search/Search";
import About from "../Screens/UserScreen/About/About";
import Privacy from "../Screens/UserScreen/Privacy/Privacy";
import PasswordForget from "../Screens/UserScreen/ForgetPassword/ForgetPassword";
import Terms from "../Screens/UserScreen/Terms/Terms";
import ContactUs from "../Screens/UserScreen/Contact/Contactus";
import UserSettings from "../Screens/UserScreen/UserSettings/UserSettings";
import PrivateRoutes from "./PrivateRoute";
import UserProfile from "../Screens/UserScreen/UserProfile/UserProfile";

function AppRoutes() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/debate/:id" element={<SingleDebate />}></Route>
          <Route path="/explore" element={<Home />}></Route>
          <Route path="/explore/tags" element={<Tags />}></Route>
          <Route path="/explore/tags/:category" element={<Home />}></Route>
          <Route path="/tour" element={<Tour />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route element={<PrivateRoutes />}>
            <Route path="/my" element={<UserDashboard />}></Route>
            <Route path="/my/user-setting" element={<UserSettings />}></Route>
            <Route path="/my/profile" element={<UserProfile />}></Route>
          </Route>
          <Route
            path="/my/:verification_token"
            element={<UserDashboard />}
          ></Route>
          <Route
            path="/forget-password/:token"
            element={<PasswordForget />}
          ></Route>
          <Route path="/contact-us" element={<ContactUs />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/privacy" element={<Privacy />}></Route>
          <Route path="/terms" element={<Terms />}></Route>
          <Route path="/user-profile" element={<></>}></Route>
          <Route path="/user-setting" element={<UserSettings />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default AppRoutes;
