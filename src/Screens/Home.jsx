
import { useEffect } from "react";
import Explore from "../Component/Explore";
import HomePortal from "../Component/HomePortal";
import Footer from "../Layouts/Footer";
import Header from "../Layouts/Header";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <Explore />
      <HomePortal />
      <Footer />
    </>
  );
}

export default Home;
