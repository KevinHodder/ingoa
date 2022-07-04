import { Nav, Navbar } from "react-bootstrap";
import icon from "../assets/icon.png";
import "bootstrap/dist/css/bootstrap.min.css";

const NavBar = (props) => {
  // const { page } = props;

  // const StyledLink = styled(Nav.Link)

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
        Ngā Ingoa ō Aotearoa
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        {/*<Nav className={"me-auto"}></Nav>*/}
        <Nav>
          <Nav.Link href={"/"}>Dictionary</Nav.Link>
          <Nav.Link href={"about"}>About</Nav.Link>
          {/*<Nav.Link href={"about"}>About</Nav.Link>*/}
          {/*<Nav.Link href={"about"}>About</Nav.Link>*/}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
