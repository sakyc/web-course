import Navbar from "./components/navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home_page from "./pages/Home_page"
import Kelas_page from "./pages/Kelas_page";
import Footer from "./components/Footer";
import { ActiveProvider } from "./globalState/ActiveContext";
import To_topscroll from "./globalState/toTop";
import Faq_page from "./pages/Faq_page";
import SyaratKetentuan from "./pages/SyaratKetentuan";
import Testi_page from "./pages/testi_page";

function App() {
  return (
    <ActiveProvider>
      <Router>
      <Navbar />
        <To_topscroll/>
        <Routes>
          <Route path="/faq" element={<Faq_page />} />
          <Route path="/" element={<Home_page/>} />
          <Route path="/Kelas" element={<Kelas_page />} />
          <Route path="/testimoni" element={<Testi_page />} />
          <Route path="/ketentuan" element={<SyaratKetentuan />} />
        </Routes>
        <Footer />
      </Router>
    </ActiveProvider>
  )
}

export default App
