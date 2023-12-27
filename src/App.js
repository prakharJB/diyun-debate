import "./App.css";
import AppRoutes from "./Application Routes/Routes";
import toast, { Toaster } from "react-hot-toast";
import { MyContext } from "./Component/SunBurst";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
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
