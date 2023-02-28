import React from "react";
import { useAppContext } from "../appContext";
import { Link } from "react-scroll";
// Components
import { Container, Nav, Navbar } from "react-bootstrap";
import { FixedNavSpacer, ToggleSwitch } from "./globalStyledComponents";
// Images
import Logo from "../images/logo.svg";

export default function NavBar() {
  const { theme, isExpanded, closeExpanded, toggleExpanded } = useAppContext();

  return (
    <>
      <FixedNavSpacer />
      <Navbar
        id="nav"
        collapseOnSelect={true}
        expand="lg"
        expanded={isExpanded}
        bg={theme === "light" ? "light" : "dark"}
        variant={theme === "light" ? "light" : "dark"}
        fixed="top"
      >
        <Container>
          <Navbar.Brand>
            <img
              alt="React Logo"
              src={Logo}
              width="35"
              height="35"
              className="d-inline-block align-top bg-dark rounded-circle nav-logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={toggleExpanded}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav navbarScroll className="me-auto">
              <Nav.Item>
                <Link
                  to={"Home"}
                  spy={true}
                  activeClass="active"
                  className="nav-link"
                  onClick={closeExpanded}
                >
                  Hogar
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to={"About"}
                  spy={true}
                  activeClass="active"
                  className="nav-link"
                  onClick={closeExpanded}
                >
                  Acerca de mí
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to={"Skills"}
                  spy={true}
                  activeClass="active"
                  className="nav-link"
                  onClick={closeExpanded}
                >
                  Habilidades
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to={"Projects"}
                  spy={true}
                  activeClass="active"
                  className="nav-link"
                  onClick={closeExpanded}
                >
                  Proyectos
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link
                  to={"Contact"}
                  spy={true}
                  activeClass="active"
                  className="nav-link"
                  onClick={closeExpanded}
                >
                  Contacto
                </Link>
              </Nav.Item>
            </Nav>
            <Nav>
              <ToggleSwitch />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
