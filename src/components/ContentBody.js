
import React,{Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import '../public/css/styles.css';

class ContentBody extends Component{
    render(){
        return (
       
            <div className={"content-body"} style={{color:'white',textAlign:'center'}}>
                <h1>
                    <Switch>
                        <Route exact path='/'>
                            <Home/>
                        </Route>
                        <Route exact path='/about'>
                            <About/>
                        </Route>
                        <Route exact path='/blog'>
                            <Blog/>
                        </Route>
                        <Route exact path='/projects'>
                            <Project/>
                        </Route>
                    </Switch>
                </h1>
            </div>
        );
    }
}
function Home(){
    return "Home";
}
function Blog(){
    return "Blog";
}
function About(){
    return "About";
}
function Project(){
    return "Project";
}
export default ContentBody;