import React,{ Component } from "react";
import {  MDBRow, MDBCol,MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import phpBg from '../../public/img/php_editor.jpg';

class BlogPost extends Component{
    render(){
        return(
        <MDBRow>
            <MDBCol lg="7">
                <h3 className="font-weight-bold mb-3 p-0"> 
                    <strong>
                        {this.props.title}
                    </strong> 
                </h3>
                <p> {this.props.content} </p>
                <p>by <a href="#!"> <strong>{this.props.author}</strong> </a>, {this.props.published}</p>
            </MDBCol>
            <MDBCol lg="5">
                <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                    <img className="img-fluid" src={phpBg} alt="" />
                    <a href="#!"> <MDBMask overlay="white-slight" /> </a>
                </MDBView>
            </MDBCol>
            <MDBCol>
                <MDBBtn color="indigo" size="md" className="waves-light ">Read more</MDBBtn>
            </MDBCol>
        </MDBRow>);
    }
}

export default BlogPost;