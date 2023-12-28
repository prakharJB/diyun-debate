import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Screens/Home";
import Signup from "../Screens/Sign-up";
import LoginForm from "../Screens/Login-form";
import DebateAdd from "../Screens/Debateadd";
import SingleDebate from "../Screens/SingleDebate";
import Tags from "../Screens/Tags";
import UserDashboard from "../Screens/UserDashboard";
import Tour from "../Screens/Tour";
import ContactUs from "../Screens/Contactus";
import Search from "../Screens/Search";
// import About from "../Screens/About";
import About from "../Screens/About";
import Privacy from "../Screens/Privacy"


function AppRoutes() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/new" element={<DebateAdd />}></Route>
          <Route path="/debate/:id" element={<SingleDebate />}></Route>
          <Route path="/explore" element={<Home />}></Route>
          <Route path="/explore/tags" element={<Tags />}></Route>
          <Route path="/explore/tags/:category" element={<Home />}></Route>
          <Route path="/tour" element={<Tour />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/my" element={<UserDashboard />}></Route>
          <Route path="/contact-us" element={<ContactUs />} ></Route>
          <Route path="/about" element={<About />} ></Route>
          <Route path="/privacy" element={<Privacy/>} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default AppRoutes;
