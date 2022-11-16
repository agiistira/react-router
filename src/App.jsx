import Navs from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Gallery from "./pages/Gallery";
import TravelBlog from "./pages/TravelBlog";
import About from "./pages/About";
import { ABOUT, DESTINATION, GALLERY, HOME, TRAVELBLOG } from "./routes";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Navs />
      <Container>
        <Routes>
          <Route element={<Home />} path={HOME} />
          <Route element={<Destination />} path={DESTINATION} />
          <Route element={<Gallery />} path={GALLERY} />
          <Route element={<TravelBlog />} path={TRAVELBLOG} />
          <Route element={<About />} path={ABOUT} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
