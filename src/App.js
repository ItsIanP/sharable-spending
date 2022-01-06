//dependencies
import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CanvasJSReact from './canvasJS/canvasjs.react'; //This is used for the pie charts.

//If there are errors with the dependancies run these:
//npm install -S react-router-dom
//npm install reactstrap react react-dom (you shouldn't need this one. if you do, i screwed up.)

//components
import PieChart from './components/PieChart'; //Pie Chart
import ColumnChart from './components/ColumnChart'; // Column Chart
import Home from './components/Home';
import Feed from './components/Feed';
import Profile from './components/Profile';
import Header from './components/Header';
<<<<<<< HEAD
import FeedPost from './components/FeedPost';
import AddGoal from './components/AddGoal';
import Register from './components/Register';
=======
import FeedPost from './components/FeedPost'
import AddGoal from './components/AddGoal'; 
import Register from './components/Register'; 
>>>>>>> fd3eca52acd0fd66debad163801a144e24496ef1
import './App.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/Home" element= {<Home/>}></Route>
          <Route path="/Feed" element={<Feed/>}></Route>
          <Route path="/Profile" element={<Profile/>}></Route>
          <Route path="/AddGoal" element={<AddGoal/>}></Route>
          <Route path="/Register" element={<Register/>}></Route>
<<<<<<< HEAD
=======
          <Route path="/" element={<Login/>}></Route>
>>>>>>> fd3eca52acd0fd66debad163801a144e24496ef1
        </Routes>
      </Router>
    </div>
  );
}

export default App;
