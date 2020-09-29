// for run this server type : npm run dev
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreatUser from './components/afterLogin/create-user.login';
import EditUser from './components/afterLogin/edit-user.login';
import UserList from './components/afterLogin/user-list.login';
import HomePage from './components/home.components';
import Login from './components/login.components';
import Registration from './components/register.components';

class App extends Component {
  render() {
    return (

      <Router>       
          <div>
            {/* routing part */}
            <Switch>
              <Route path="/" exact component={HomePage}/>
              <Route path="/login" component={Login}/>
              <Route path="/register" component={Registration}/>
              <Route path="/userlogin" component={CreatUser}/>
              <Route path="/showuser" component={UserList}/>
              <Route path="/edituser/:id" component={EditUser}/>
            </Switch>
          </div>
      </Router>

    );
  }
}

export default App;
