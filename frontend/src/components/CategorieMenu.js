//import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./CategorieMenu.css";
const CategorieMenu = (Props) => {
  return (
    <>
    {/* {  <Navbar bg="light" variant="light">
        <Container>
          <Nav>
            <Nav.Link to="/" className="nav-links">
              <NavLink to="/">HOME</NavLink>
            </Nav.Link>

            {Props.categories.map((item) => (
              <Nav.Link to="samsung" className="nav-links" key={item.id}>
                <NavLink to="samsung">{item.name}</NavLink>
              </Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>} */}

      <div className="mainmenu-area">
        <div className="container">
          <div className="row">
            <div className="navbar">
              <ul className="nav navbar-nav navbar-expand">
                
                <li ><NavLink to="/" >HOME</NavLink></li>
                {Props.categories.map((item) => (
                  <li key={item.id}>

                    <NavLink to={`/${item.name}`}>{item.name}</NavLink>
                  </li>
                ))}
                <li ><NavLink to="cart" >Cart</NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CategorieMenu;
