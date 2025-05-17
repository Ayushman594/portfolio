import Main from './components/Main.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
// import Nav1 from './Additional files/Nav.js';
import './App.css';

//  function App() {
//      return (
//       <h3>Mu</h3>
// );
//          }

//          export default App;

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
  return (
    <>
    <Navbar expand="lg" className="bg-body-secondary">
        <Navbar.Brand href="#home" className='ms-3'>Personal Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#" className="ms-5">About</Nav.Link>
            <Nav.Link href="#link" className="ms-5">Projects</Nav.Link>
            <Nav.Link href="#link" className="ms-5">Skills</Nav.Link>
            <Nav.Link href="#link" className="ms-5">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    <Main/>
    <About/>
    <Projects/>
    <Skills/>
    <Contact/>
    </>
  );
}

export default BasicExample;