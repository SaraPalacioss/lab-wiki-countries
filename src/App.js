import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Link, Route, Switch, Redirect } from 'react-router-dom'


class App extends React.Component {
  constructor(props){
  super(props)
  
  }
  render(){
    
    return(
      <div>

        <Navbar />
     
<div class="container">
  <div class="row">
    <div class="col">
    <CountriesList />
    </div>
    <div class="col">
    <CountryDetails />
    </div>
  </div>
</div>
      </div>
    )
  }


  
}

export default App;

