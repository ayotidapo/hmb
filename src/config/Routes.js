/* eslint-disable no-return-assign */
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { PageLoader } from '../components/Loaders';
import PrivateRoute from '../layouts/PrivateRoute';
import AuthRoute from '../layouts/AuthRoute';
import PublicRoute from '../layouts/PublicRoute';
import { AlertWrapper } from '../components/alert/AlertComponent';

// create Loadable pages
const Home = lazy(() => import('../pages/home/Home'));
const Login = lazy(() => import('../pages/auth/Login'));
const About = lazy(() => import('../pages/about/About'));

const Routes = () => (
  <Router>
    <Suspense fallback={<PageLoader />}>
      <AlertWrapper ref={alertRef => (window.alertRef = alertRef)} />
      <Switch>
        {/* can't access them when you are logged in */}
        <AuthRoute exact path="/login" component={Login} />
        <AuthRoute exact path="/" component={Login} />

        {/* can only access them when you are logged in */}
        <AuthRoute exact path="/home" component={Home} />

        {/* public route: accessible to both !!authenticated users */}
        <PublicRoute exact path="/about" component={About} />
        <Redirect to="/login" />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
