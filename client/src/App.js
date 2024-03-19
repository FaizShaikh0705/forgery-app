import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from "../src/redux/store";
import { PersistGate } from 'redux-persist/lib/integration/react';
import Header from '../src/components/header/Header'
import About from '../src/components/about/About'
import Footer from '../src/components/footer/Footer'
import Faq from '../src/components/faq/Faq'
import Login from './components/Login/Login';
import SignUp from "./components/SignUp/SignUp"


function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Switch>
              <Route path="/Login" component={Login} />
              <Route path="/signUp" component={SignUp} />
            </Switch>
          </Router>
          <Header />
          {/* <About /> */}
          <Faq />
          <Footer />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
