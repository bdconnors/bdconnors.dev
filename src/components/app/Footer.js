import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import logo from '../../public/img/logowhite2-350x42.png';
const Footer = () => {
    return (
        <MDBFooter style={{zIndex:1}}color="elegant-color-dark" className="font-small pt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6">
                        <img src={logo}/>
                    </MDBCol>
                    <MDBCol md="6">
                        <ul>
                            <li className="list-unstyled">
                                <a href="/about">About</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="/blog">Blog</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="/projects">Projects</a>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: bdconnors.dev
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default Footer;