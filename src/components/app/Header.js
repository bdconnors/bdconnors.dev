import React,{Component} from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact"
import logo from '../../public/img/logowhite2-400x48.png';

class Header extends Component{
    state = {
        isOpen:false
    }
    toggleCollapse=()=>{
        this.setState({ isOpen: !this.state.isOpen });
    }
    render(){
        return <MDBNavbar color="elegant-color-dark" dark expand="lg" >
            <MDBNavbarBrand className={"header-nav-brand"} href = '/'>
                <img src={logo} className={"img-fluid"}></img>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                <MDBNavbarNav className={"header-nav-right"} right>
                    <MDBNavItem className={"header-nav-item"}>
                        <MDBNavLink to = '/about'>About</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem className={"header-nav-item"}>
                        <MDBNavLink to = '/blog'>Blog</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem className={"header-nav-item"}>
                        <MDBNavLink to = '/projects'>Projects</MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
    
    }
}
export default Header;