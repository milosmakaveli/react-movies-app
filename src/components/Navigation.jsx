import { Container, Navbar } from 'react-bootstrap'
import image from '../assets/logo.png'

export default function Navigation(){
    return(
        <Navbar bg="dark" variant='dark' expand="lg">
        <Container>
          <Navbar.Brand href="#home" style={{fontSize:'3rem'}}>
          <img
              alt=""
              src={image}
              width="80"
              height="70"
              className="d-inline-block align-top"
        /> {' '}Movies
         </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Test version
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}