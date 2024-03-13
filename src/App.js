import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../src/components/header/Header'
import About from '../src/components/about/About'
import Footer from '../src/components/footer/Footer'
import Faq from '../src/components/faq/Faq'
import Login from './components/Login/Login';
import SignUp from "./components/SignUp/SignUp"


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/signUp" component={SignUp} />
        </Switch>
      </Router>
      <Header />
      <About />
      <Faq />
      <Footer /></>
  );
}

export default App;
