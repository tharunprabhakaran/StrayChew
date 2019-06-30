import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import AboutComponent from './components/AboutComponent'
import EngineeringComponent from './components/EngineeringComponent'
import ChewAgainComponent from './components/ChewAgainComponent'
import NavbarComponent from './components/NavbarComponent'
class App extends Component{

  render(){
  return(
    <BrowserRouter>
    <NavbarComponent />
    <div className="App">
        
        <Route path="/About" component = {AboutComponent}></Route>
        <Route path="/Engineering" component = {EngineeringComponent}></Route>
        <Route path="/ChewNow" component = {ChewAgainComponent}></Route>
    </div>
    </BrowserRouter>
  )}
}
  

export default App;
