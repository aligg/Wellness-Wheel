import React from 'react';
import {
  Route,
  withRouter,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from './Home';
import Footer from './Footer';
import Header from './Header';
import About from './About';
import Quotes from './Quotes';

const Router = ({ toggleDrawer }) => (
  <div
    style={{
      flex: 1,
      flexDirection: 'column',
      display: 'flex',
    }}
  >
    <Header toggleDrawer={toggleDrawer} />
    <div
      style={{
        flex: 1,
        flexDirection: 'column',
        display: 'flex',
      }}
    >
      <Route
        path="/"
        exact
        component={Home}
      />
      <Route
        path="/about"
        exact
        component={About}
      />
      <Route
        path="/quotes"
        exact
        component={Quotes}
      />
    </div>
    <Route
      path="/"
      component={Footer}
    />
  </div>
);

Router.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
};


export default withRouter(Router);
