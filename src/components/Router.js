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

function Router() {
  return (
    <div
      style={{
        flex: 1,
        flexDirection: 'column',
        display: 'flex',
      }}
    >
      <Route
        path="/"
        render={props => <Header {...props} toggleDrawer={props.toggleDrawer} />}
      />
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
      </div>
      <Route
        path="/"
        component={Footer}
      />
    </div>
  );
}

Router.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
};


export default withRouter(Router);
