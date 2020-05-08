import React, { Fragment, useEffect } from 'react';
import NavBar from './components/layout/NavBar';
import Landing from './components/layout/Landing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LogIn from './components/auth/LogIn';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
    <Router>
      <Fragment className="App">
          <NavBar />
        <Route exact path='/' component={Landing} />
          <section className="container">
          <Alert />
            <Switch>
          <Route exact path='/login' component={LogIn} />
          <Route exact path='/register' component={Register} />
            </Switch>
        </section>
      </Fragment>
    </Router>
    </Provider>
  );
}

export default App;
