import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

class App extends React.Component {
  constructor(props){
  super(props)
  
  }
  render(){
    
    return(
      <div>

        <Navbar />
        <CountriesList />
        <CountryDetails />
      </div>
    )
  }
}

export default App;
