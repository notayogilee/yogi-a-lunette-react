import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Main from './components/pages/Main';
import About from './components/pages/About';
import Videos from './components/pages/Videos';
import Contact from './components/pages/Contact';
import Footer from './components/layout/Footer';
import Live from './components/pages/Live';

import './App.scss';

ReactGA.initialize(process.env.REACT_APP_GA_MEASUREMENT_ID);
ReactGA.pageview(window.location.pathname + window.location.search);


const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

const App = () => {


  return (
    <Router history={history}>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/videos" component={Videos} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/live" component={Live} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
