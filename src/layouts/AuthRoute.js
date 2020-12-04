import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ErrorBoundary from '../components/ErrorBoundary';

class AuthRoute extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { component: Component, auth, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props => {
          if (!auth.isAuthenticated) {
            return (
              <div>
                <ErrorBoundary>
                  <Component {...props} />
                </ErrorBoundary>
              </div>
            );
          }
          return <Redirect to="/" />;
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  {},
)(AuthRoute);
