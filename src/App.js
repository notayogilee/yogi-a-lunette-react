import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Main from './components/pages/Main';
import About from './components/pages/About';
import Videos from './components/pages/Videos';
import Contact from './components/pages/Contact';
import Footer from './components/layout/Footer';
import Moon from './components/pages/Moon';
// import Pranayama from './components/Pranayama';

import './App.scss';

const App = () =>

  <Router>
    <Navbar />
    <Sidebar />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/about" component={About} />
      <Route exact path="/videos" component={Videos} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/moon" component={Moon} />
    </Switch>
    <Footer />
  </Router>

export default App;
