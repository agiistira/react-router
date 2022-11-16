import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "../img/logo.png";
import { NavLink } from "react-router-dom";
import { ABOUT, DESTINATION, GALLERY, HOME, TRAVELBLOG } from "../routes";

const Navs = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <NavLink to={HOME} className="navbar-brand">
            <img src={Logo} alt="logo" style={{ width: "100px" }}></img>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to={HOME} className="nav-link">
                Home
              </NavLink>
              <NavLink to={DESTINATION} className="nav-link">
                Destination
              </NavLink>
              <NavLink to={GALLERY} className="nav-link">
                Gallery
              </NavLink>
              <NavLink to={TRAVELBLOG} className="nav-link">
                Travel Blog
              </NavLink>
              <NavLink to={ABOUT} className="nav-link">
                About Us
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navs;
