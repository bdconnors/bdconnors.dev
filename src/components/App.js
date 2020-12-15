import React, { Component} from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ContentBody from './ContentBody';

class App extends Component{
   render(){
      return(
         <Router>
            <Header/>
            <ContentBody/>
            <Footer/>
         </Router>
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
export default App;