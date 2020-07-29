import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import About from './components/About';
// import Videos from './components/Videos';
import VideoNew from './components/VideoNew'
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.scss';

const App = () =>

  <Router>
    <Navbar />
    <Sidebar />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/about" component={About} />
      <Route exact path="/videos" component={VideoNew} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
    <Footer />
  </Router>


export default App;
