import React from "react";
import { Navbar, Nav } from "react-bootstrap";
// import { Link, withRouter } from "react-router-dom";
import { RouteComponentProps, Link, withRouter } from "react-router-dom";

interface NavComponentProps {
  title: string;
}

type AllTheProps = NavComponentProps & RouteComponentProps;

const MyNav = ({ title, location }: AllTheProps) => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Link to="/">
      <Navbar.Brand>{title}</Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto">
        <Link to="/">
          <div
            className={
              location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            Home
          </div>
        </Link>
        <Link to="/menu">
          <div
            className={
              location.pathname === "/menu" ? "nav-link active" : "nav-link"
            }
          >
            Menu
          </div>
        </Link>
        <Link to="/reservations">
          <div
            className={
              location.pathname === "/reservations"
                ? "nav-link active"
                : "nav-link"
            }
          >
            Reservation
          </div>
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default withRouter(MyNav);
