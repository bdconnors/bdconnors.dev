import React,{Fragment,Component} from "react";
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
    } from "mdbreact"
import logo from '../public/img/logowhite2-400x48.png';

class Header extends Component{
    state = {
        isOpen:false
    }
    toggleCollapse=()=>{
        this.setState({ isOpen: !this.state.isOpen });
    }
    render(){
        return(
                <MDBNavbar color="elegant-color-dark" dark expand="md">
                    <MDBNavbarBrand>
                        <img src={logo} className={"img-fluid"}></img>
                    </MDBNavbarBrand>
                    <MDBNavbarToggler onClick={this.toggleCollapse} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                        <MDBNavbarNav left>
                            <MDBNavItem>
                                <MDBNavLink to="/about">About</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/blog">Blog</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink to="/projects">Projects</MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
            );
    }
}
export default Header;