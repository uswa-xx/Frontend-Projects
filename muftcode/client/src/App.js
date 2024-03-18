import React from "react";
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Navbar from "./navbar";
import Header from "./header";
import HowItWorks from "./HowItWorks";
import Aboutus from "./components/Aboutus";
import Services from "./Services";
import "./App.css";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Chat from './components/Chat';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Header />
      <HowItWorks />
      <Aboutus />
      <Services />
      <Routes>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route exact path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
};

export default App;
