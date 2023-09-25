
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./pages/aboutMe";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import Resume from "./pages/resume";
import NavBar from "./components/navBar";

export default function App() {
  return (
    <>
   <NavBar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </>
  );
}