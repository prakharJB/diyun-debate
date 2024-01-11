import "./App.css";
import AppRoutes from "./Application Routes/Routes";
import toast, { Toaster } from "react-hot-toast";
import { MyContext } from "./Component/SunBurst";
import { useState } from "react";
import { useSelector } from "react-redux";
import  Axios  from "axios";

function App() {
  const [text, setText] = useState("");
  const token = useSelector((state) => state?.auth?.token);

  if (token) {
    Axios.defaults.headers.common["Authorization"] = "Bearer " + token;
  }
  
  return (
    <>
      <div>
        <Toaster
          toastOptions={{
            className: "",
            duration: 3000,
          }}
        />
        <MyContext.Provider value={{ text, setText }}>
        <AppRoutes />
        </MyContext.Provider>
      </div>
    </>
  );
}

export default App;
