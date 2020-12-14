
import React,{Component,Fragment} from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ProjectPage from './pages/ProjectPage';
import {Route} from 'react-router-dom';

class ContentBody extends Component{
    render(){
        return (
            <div style={{color:'white'}}>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/about' component={AboutPage}/>
                <Route exact path='/blog' component={BlogPage}/>
                <Route exact path='/projects' component={ProjectPage}/>
            </div>
        );
    }
}
export default ContentBody;