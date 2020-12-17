
import React,{Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import BlogPage from '../blog/BlogPage';
import nodeLogo from '../../public/img/nodeJSlogo.png';
class ContentBody extends Component{
    render(){
        return (
            <main className={"content-body"}>
                <Switch>
                    <Route exact path='/'>
                        <Home/>
                    </Route>
                    <Route exact path='/about'>
                        <About/>
                    </Route>
                    <Route exact path='/blog'>
                        <BlogPage/>
                    </Route>
                    <Route exact path='/projects'>
                        <Project/>
                    </Route>
                </Switch>
             
            </main>
        );
    }
}
function Home(){
    
    return <img src={nodeLogo}></img>;
}
function About(){
    return "About";
}
function Project(){
    return "Project";
}
export default ContentBody;