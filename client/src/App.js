import React, { Fragment } from 'react';
import NavBar from './components/layout/NavBar';
import Landing from './components/layout/Landing';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LogIn from './components/auth/LogIn';
import Register from './components/auth/Register';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <Fragment className="App">
        <NavBar />
        <Route exact path='/' component={Landing} />
          <section className="container">
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
