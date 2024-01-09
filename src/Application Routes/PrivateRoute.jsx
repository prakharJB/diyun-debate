import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


const PrivateRoutes = () => {
  // const storedToken = localStorage.getItem("token");
  // let auth = {'token': true}
  const token = useSelector((state) => state?.auth?.token);
  const auth = { token: !!token };

  return auth.token ? <Outlet /> : <Navigate to="/" />;
};

// const isAuthenticated = storedToken && isValidToken(storedToken);

// return (
//     isAuthenticated ? <Outlet /> : <Navigate to="/" />
// );
// };

// const isValidToken = (token) => {
// try {
//     const decodedToken = jwt.verify(token, 'your_secret_key');

//     return true;
// } catch (error) {
//     return false; 
// }
// };

export default PrivateRoutes;
