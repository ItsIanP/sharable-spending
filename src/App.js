//dependencies
import React, { Component } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CanvasJSReact from './canvasJS/canvasjs.react'; //This is used for the pie charts.

//components
import PieChartWithCustomization from './components/PieChart'; //Pie Chart
import ColumnChart from './components/ColumnChart'; // Column Chart
import Home from './components/Home';
import Feed from './components/Feed';
import Profile from './components/Profile';
import Header from './components/Header';
import Login from './components/Login';
import AddGoal from './components/AddGoal';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/Home" element= {<Home/>}></Route>
          <Route path="/Feed" element={<Feed/>}></Route>
          <Route path="/Profile" element={<Profile/>}></Route>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/AddGoal" element={<AddGoal/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
