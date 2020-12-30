import {MDBContainer, MDBRow,MDBCol} from 'mdbreact';
import React, { Component} from 'react';
import Accordion from '../Accordion';
import Logo from '../Logo';

class HomePage extends Component{
    state = {
        collapseID: "collapse3"
    }

    toggleCollapse = collapseID => () =>
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ""
        })
    );
   render(){
      return(
        <MDBContainer id={"home-content-container"} className={"mt-5 mb-5"}>
           <Accordion id={"content1"} title={"Programming"} icon={"code"}>
               <MDBRow>
                   <MDBCol md='3'>
                        <Logo type={'php'}/>
                   </MDBCol>
                   <MDBCol md='3'>
                        <Logo type={'js'}/>
                   </MDBCol>
               </MDBRow>
           </Accordion>
           <Accordion id={"content2"} title={"Database"} icon={"database"}>
                <MDBRow>
                        <MDBCol md='3'>
                            <Logo type={'mysql'}/>
                        </MDBCol>
                        <MDBCol md='3'>
                            <Logo type={'postgre'}/>
                        </MDBCol>
                        <MDBCol md='3'>
                            <Logo type={'mongo'}/>
                        </MDBCol>
                </MDBRow>
           </Accordion>
           <Accordion id={"content3"} title={"Frameworks"} icon={"code-branch"}>
                <MDBRow>
                    <MDBCol md='3'>
                        <Logo type={'node'}/>
                    </MDBCol>
                    <MDBCol md='3'>
                        <Logo type={'react'}/>
                    </MDBCol>
                </MDBRow>
           </Accordion>
        </MDBContainer>
      );
   }
}
export default HomePage;