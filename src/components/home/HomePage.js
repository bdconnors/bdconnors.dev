import {MDBContainer, MDBRow,MDBCol} from 'mdbreact';
import React, { Component} from 'react';
import Accordion from '../Accordion';
import NodeLogo from '../../public/img/node_logo.png';
import PhpLogo from '../../public/img/php_logo.png';
import JavascriptLogo from '../../public/img/js_logo.png';
import MysqlLogo from '../../public/img/mysql_logo.png';
import PostgresqlLogo from '../../public/img/postgresql_logo.png';
import MongoLogo from '../../public/img/mongo_logo.png';
import ReactLogo from '../../public/img/react_logo.png';

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
        <MDBContainer id={"home-content-container"} className={"mt-5"}>
           <Accordion id={"content1"} title={"Programming"} icon={"code"}>
               <MDBRow>
                   <MDBCol>
                       <img src={PhpLogo}></img>
                   </MDBCol>
                   <MDBCol>
                       <img src={JavascriptLogo}></img>
                   </MDBCol>
               </MDBRow>
           </Accordion>
           <Accordion id={"content2"} title={"Database"} icon={"database"}>
                <MDBRow>
                        <MDBCol>
                            <img src={MysqlLogo}></img>
                        </MDBCol>
                        <MDBCol>
                            <img src={PostgresqlLogo}></img>
                        </MDBCol>
                        <MDBCol>
                            <img src={MongoLogo}></img>
                        </MDBCol>
                </MDBRow>
           </Accordion>
           <Accordion id={"content3"} title={"Frameworks"} icon={"code-branch"}>
                <MDBRow>
                    <MDBCol>
                        <img src={NodeLogo}></img>
                    </MDBCol>
                    <MDBCol>
                        <img src={ReactLogo}></img>
                    </MDBCol>
                </MDBRow>
           </Accordion>
        </MDBContainer>
      );
   }
}
export default HomePage;