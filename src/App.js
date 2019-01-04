import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header'
import Nav from './Nav/Nav'
import Hand from './Hand/Hand';
import Eye from './Eye/Eye';
import Brain from './Brain/Brain';
import Heart from './Heart/Heart';
//import Mouth from './Mouth/Mouth';
import Footer from './Footer/Footer'


class App extends Component {
  render() {
    return (
      <div className="App">

          <Header />
          <Nav />
          <Hand />
          <Eye />
          <Brain />
          <Heart />
       
          <Footer />

      </div>
    );
  }
}

export default App;
