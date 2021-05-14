import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RestellaContainer from '../../containers/RestellaContainer';
import AboutPage from '../../containers/AboutPage';

export default function App() {
  return (
    <RestellaContainer />
    // <Router>
    //   <Switch>
    //     <Route path="/" exact component={RestellaContainer} />
    //     <Route path="/about" exact component={AboutPage} />
    //   </Switch>
    // </Router>
  );
}
