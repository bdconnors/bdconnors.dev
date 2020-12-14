
import React,{Fragment,Component} from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
const greyFont = {color:'#C5C6C7'}
const navBarStyle = { background:'rgb(11, 12, 16)', fontFamily:'Roboto',borderRadius:"3px"}
import logo from '../public/img/logowhite500x83.png';

class Navigation extends Component{
    render(){
        return(
            <Fragment>
                <Navbar variant="light" expand="lg" style={navBarStyle}>
                    <Navbar.Brand href="/" style={greyFont}><img src={logo}></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/about" style={greyFont}>About</Nav.Link>
                            <Nav.Link href="/blog" style={greyFont}>Blog</Nav.Link>
                            <Nav.Link href="/projects" style={greyFont}>Projects</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>);
    }
}
export default Navigation;