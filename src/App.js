import React from 'react';
import './App.css';
import BestBooks from './BestBook.js';
import { Routes, Route } from "react-router-dom"
import About from "./About.js"



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BestBooks />
      </div>
    );
  }
}
export default App;

