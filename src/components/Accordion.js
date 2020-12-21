import { MDBCollapse,MDBContainer,MDBCard, MDBCardBody,MDBCardHeader,MDBIcon } from "mdbreact";
import React, { Component} from "react";


class Accordion extends Component {
    state = {
        collapseID: ""
    }

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
                collapseID: prevState.collapseID !== collapseID ? collapseID : ""
            })
        );
    }

    render() {
        const hasIcon = this.props.icon != null;
        return (<MDBContainer style={{color:"black"}}>
                <MDBCard>
                    <MDBCardHeader onClick={this.toggleCollapse(this.props.id)}>
                        <h5>
                            <b>{this.props.title} {hasIcon && <MDBIcon icon={this.props.icon}/>}</b>
                            <MDBIcon style={{float:"right"}} icon={this.state.collapseID === this.props.id ? 'angle-up' : 'angle-down'}/>
                        </h5>
                    </MDBCardHeader>
                    <MDBCollapse id={this.props.id} isOpen={this.state.collapseID}>
                        <MDBCardBody>
                            {this.props.children}
                        </MDBCardBody>
                    </MDBCollapse>
                </MDBCard>
            </MDBContainer>);

    }
}

export default Accordion;