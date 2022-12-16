import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import BestBooks from './BestBooks.js';
import About from "./About.js";
import Header from './Header.js';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from '@auth0/auth0-react';
import AuthButtons from './auth/AuthButtons';
import axios from 'axios';

class App extends React.Component {
   
  request = async () => {
    let res = await this.props.auth0.getIdTokenClaims();
    let token = res.__raw;
    console.log(token);

    let request = {
      method: 'GET',
      url: 'http://localhost:3001/test',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }

    let response = await axios(request);
    console.log(response.data);
  }
  
  render() {
    let auth0 = this.props.auth0;
    console.log(auth0);

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
          <AuthButtons />
          {auth0.isAuthenticated ? <button onClick={this.request}>Make request</button> : null}
          </>
    );
  }
}


export default withAuth0(App);

