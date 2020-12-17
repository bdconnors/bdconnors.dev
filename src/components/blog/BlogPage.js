import React, { Component } from "react";
import { MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import BlogPost from './BlogPost';
class BlogPage extends Component{
    render(){
        return (
            <MDBCard className="my-5 px-5 pb-5 blog-body">
                <MDBCardBody>
                    <h2 className="h1-responsive font-weight-bold text-center my-5">
                        Recent posts
                    </h2>
                    <p className="text-center w-responsive mx-auto mb-5">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>
                    <BlogPost/>
                </MDBCardBody>
            </MDBCard>
        );
    }
}

export default BlogPage;
