import "./index.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomeMain from "./websites/home/HomeMain";
import Error from "./websites/error/Error";
import Navbar from "./websites/navbar/Navbar";
import Footer from "./websites/footer/Footer";

const  App = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="App relative">
      <Router>
        <Navbar />
        <Routes>
          {/* ======================= Start-pages ======================= */}
          <Route path="/" element={<HomeMain />} />
          <Route path="/home" element={<HomeMain />} />
          {/* ======================= End-pages ======================= */}

          {/* ======================= Start-Error ======================= */}
          <Route path="*" element={<Error />} />
          {/* ======================= End-Error ======================= */}
        </Routes>
        <Footer />
      </Router>
      <div className="fixed bottom-0 right-0">
        <div
          className="bgsecondary cursor-pointer up-box rounded-full flex justify-center items-center m10"
          onClick={scrollToTop}
        >
          <img
            src="https://i.imgur.com/MEcgvFc.png"
            alt="upimg"
            className="up-img"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
