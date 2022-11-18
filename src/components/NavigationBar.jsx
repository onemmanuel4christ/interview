import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='md:h-[100px]'>
    <Container>
      <Navbar.Brand href="/">Interview Test</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          
        </Nav>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          {/* <Nav.Link href="/new-blog">Add Blog</Nav.Link> */}
          <Nav.Link href="/">Login</Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavigationBar
