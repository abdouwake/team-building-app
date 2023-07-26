import React,{useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./layouts/login/login";
import Signin from "./layouts/singnin/Signin";
import Dashboard from "./layouts/dashboard/dashboard";
import Stage from "./layouts/stage/stage";
import {Landing} from "./layouts/landing/landing";


function App(){

    return (
          <Router>
              <Routes>
                  <Route exact path="/" element={<Landing/>} />
                  <Route exact path="/login" element={<Login/>} />
                  <Route path="/signin" element={<Signin/>} />
                  <Route path="/dashboard" element={<Dashboard/>} />
                  <Route path="/stage" element={<Stage/>} />
              </Routes >
          </Router>
  );
}

export default App;


