import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
function NavigationBar(){
    return (
        <Navbar bg="light" expand="lg">        
        <Navbar.Brand><Link to="/">Shoes-Shop</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/">HOME</Link>
            <Link to="/detail">Detail</Link>
            <Link to="/qna">Q&A</Link>
            <Link to="/faq">FAQ</Link>
            
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>          
        </Navbar.Collapse>        
      </Navbar> 
    );
}

export default NavigationBar;