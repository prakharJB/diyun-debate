import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Screens/Home";
import Signup from "../Screens/Sign-up";
import LoginForm from "../Screens/Login-form";
import DebateAdd from "../Screens/Debateadd";
import SingleDebate from "../Screens/SingleDebate";
import Tags from "../Screens/Tags";
import UserDashboard from "../Screens/UserDashboard";
import Tour from "../Screens/Tour";

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
          <Route path="/search" element={<Home />}></Route>
          <Route path="/my" element={<UserDashboard />}></Route>
         
          
        </Routes>
      </Router>
    </div>
  );
}

export default AppRoutes;
