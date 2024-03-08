import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWrapper } from './CartComponents/CartWrapper'


export const Header = () => {
  
  return (

    <div className='container-fluid'>
    <Navbar expand="lg" className="bg-none m-5">
      <Container>
        <Navbar.Brand className="logoText" href="/">HardLemonz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="text-end">
          <Nav.Link className="navLink mb-5 relative text-end p-4" href="/lemonade"> 
            lemonade
            </Nav.Link>
            
            <Nav.Link className="navLink mb-5 relative text-end" href="/cart"> 
            Cart<CartWrapper /> 
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    </div>
    
   
  )
}
