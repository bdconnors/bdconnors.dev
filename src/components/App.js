import React, { Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Navigation from './Navigation';
import ContentBody from './ContentBody';
class App extends Component{
   render(){
      return(
         <Router>
            <Navigation/>
            <ContentBody/>
         </Router>
      );
   }
}
export default App;