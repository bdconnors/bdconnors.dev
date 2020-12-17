import React,{ Component } from "react";
import {  MDBRow, MDBCol,MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import phpBg from '../../public/img/php_editor.jpg';

class BlogPost extends Component{
    render(){
        return(<MDBRow>
            <MDBCol lg="7">
                <a href="#!" className="indigo-text">
                    <h6 className="font-weight-bold mb-3">
                        <MDBIcon icon="suitcase" className="pr-2" />
                        Category
                    </h6>
                </a>
                <h3 className="font-weight-bold mb-3 p-0"> <strong>Title of the Post</strong> </h3>
                <p>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt. Neque porro qui dolorem ipsum quia
                    sit amet.
                </p>
                <p>by <a href="#!"> <strong>Brandon Connors</strong> </a>, 12/17/2020</p>
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