import React,{useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./layouts/login/login";
import Signin from "./layouts/singnin/Signin";
import Dashboard from "./layouts/dashboard/dashboard";
import Stage from "./layouts/stage/stage";
import Landing from "./layouts/landing/landing";
import Admin from "./layouts/admin/admin";


function App(){

    return (
          <Router>
              <Routes>
                  <Route path="/" element={<Login/>} />
                  <Route path="/signin" element={<Signin/>} />
                  <Route path="/dashboard" element={<Dashboard/>} />
                  <Route path="/stage" element={<Stage/>} />
                  <Route path="/admin" element={<Admin/>} />
              </Routes>
          </Router>
  );
}

export default App;


