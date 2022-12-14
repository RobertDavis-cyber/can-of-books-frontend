import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import BestBooks from './BestBooks.js';
import About from "./About.js";
import Header from './Header.js';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
   render() {
    return (
      <>
      <BrowserRouter>
        <Header />
        <Routes>
            <Route 
              exact path="/"
              element={<BestBooks />}
            >
            </Route>
            <Route exact path="/about" element={<About/>}>

              
            </Route>
          </Routes>
          <Footer />
          /</BrowserRouter>
          </>
    );
  }
}

export default App;

