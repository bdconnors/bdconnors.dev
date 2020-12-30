import React,{Component} from 'react';
import NodeLogo from '../public/img/node_logo.png';
import PhpLogo from '../public/img/php_logo.png';
import JavascriptLogo from '../public/img/js_logo.png';
import MysqlLogo from '../public/img/mysql_logo.png';
import PostgresqlLogo from '../public/img/postgresql_logo.png';
import MongoLogo from '../public/img/mongo_logo.png';
import ReactLogo from '../public/img/react_logo.png';
import { MDBCard,MDBCardTitle,MDBCardBody } from 'mdbreact';

class Logo extends Component{
    render(){
        let values = this.getValues();
        return (
            <MDBCard>
                <MDBCardBody style={{textAlign:'center'}}>
                    <img src={values.image} height = {96} width = {96}></img>
                    <h4 className={"h4-responsive"}>{values.title}</h4>
                </MDBCardBody>
            </MDBCard>
        
        );
    }
    getValues(){
        let values = {
            image:null,
            title:''
        };
        switch (this.props.type){
            case 'node':
                values.image = NodeLogo
                values.title = 'Node JS'
                break;
            case 'php':
                values.image = PhpLogo
                values.title = 'PHP'
                break;
            case 'js':
                values.image = JavascriptLogo
                values.title = 'JavaScript'
                break;
            case 'mysql':
                values.image = MysqlLogo
                values.title = 'MySQL'
                break;
            case 'postgre':
                values.image = PostgresqlLogo
                values.title ='PostgreSQL'
                break;
            case 'mongo':
                values.image = MongoLogo;
                values.title = 'Mongo DB'
                break;
            case 'react':
                values.image = ReactLogo
                values.title = 'React JS'
                break;
            default:
                break;

        }
        return values;
    }
}
export default Logo