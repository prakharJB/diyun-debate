import "./App.css";
import AppRoutes from "./Application Routes/Routes";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
        <Toaster
          toastOptions={{
            className: "",
            duration: 3000,
          }}
        />
        <AppRoutes />
      </div>
    </>
  );
}

export default App;
