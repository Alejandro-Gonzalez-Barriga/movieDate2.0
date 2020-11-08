import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Suggestions from "./components/suggestions.js";
import LogInForm from "./components/login.js";
import SignUpForm from "./components/signUp.js";
import LoggedOut from "./components/loggedout.js";
import TermsOfService from "./components/termsOfService.js";
import StarComp from './components/stars.js';
import App from './App.js'





class Home extends React.Component {


  render() {
    return (

      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/home" component={App} />
            <Route path="/" component={LogInForm} exact />
            <Route path="/signup" component={SignUpForm} />
            <Route path="/suggestions" component={Suggestions} />
            <Route path="/termsofservice" component={TermsOfService} />
            <Route path="/loggedout" component={LoggedOut} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>


    );
  }
}

ReactDOM.render(<Home />, document.getElementById('app'));
