import React, { Component, Fragment } from "react";
import { MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import BlogPost from './BlogPost';
class BlogPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }
    componentDidMount(){
        fetch("http://localhost:3000/posts")
        .then(res => res.json())
        .then((result) => {
                this.setState({
                    isLoaded : true,
                    items: result
                })
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error :error
                })
            }
        )
    }
    render(){
        const {error,isLoaded,items} = this.state;
        
        if (error) {
            return <MDBCard className="my-5 px-5 pb-5 blog-body">
                <MDBCardBody>
                <h2 className="h1-responsive font-weight-bold text-center my-5">
                    Error: {error.message}
                </h2>
                </MDBCardBody>
            </MDBCard>;
        } else if (!isLoaded) {
            return <MDBCard className="my-5 px-5 pb-5 blog-body">
                <MDBCardBody>
                <h2 className="h1-responsive font-weight-bold text-center my-5">
                    Loading...
                </h2>
                </MDBCardBody>
            </MDBCard>
        } else {
            return (
                <MDBCard className="my-5 px-5 pb-5 blog-body">
                <MDBCardBody>
                    <h2 className="h1-responsive font-weight-bold text-center my-5">
                        Recent posts
                    </h2>
                    <ul>
                    {
                        items.map((item)=>
                            <BlogPost key={item._id} title={item.title} content={item.content} author={item.author.username} published={item.published}/>
                        )
                    }
                    </ul>
                </MDBCardBody>
            </MDBCard>

            )
        }
    }
}

export default BlogPage;
