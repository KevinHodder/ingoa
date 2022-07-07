import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

import icon from "../assets/icon.webp";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = (props) => {
  // const { page } = props;

  const StyledLink = styled(Nav.Link)`
    margin-left: 10px;
  `;

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className={"px-2"}
      style={{ fontSize: "1.5rem" }}
    >
      <Navbar.Brand href={"/"} style={{ fontSize: "1.5rem" }}>
        <img
          src={icon}
          height="30"
          className="d-inline-block align-top"
          alt="logo"
          style={{ marginRight: "5px" }}
        />
        Ngā Ingoa o Aotearoa
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        {/*<Nav className={"me-auto"}></Nav>*/}
        <Nav>
          <StyledLink href={"/"}>Dictionary | Papakupu</StyledLink>
          <StyledLink href={"about"}>About | Mō te papakupu</StyledLink>
          {/*<Nav.Link href={"about"}>About</Nav.Link>*/}
          {/*<Nav.Link href={"about"}>About</Nav.Link>*/}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
