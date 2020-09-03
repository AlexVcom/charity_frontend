import React, {Component} from 'react';
import './App.css';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Home from './components/Home.js'
import Login from './components/Login.js'
import Registration from './components/Registration.js'
import Form from './components/Form.js'
import FormConfirmation from './components/FormConfirmation.js'


import { BrowserRouter as Router,
  Route,Switch, Redirect
} from 'react-router-dom';


  class App extends Component {
  render () {
    return <div>
      <Router>
        {/* <Header/> */}
        <Switch>
          <Route path= "/" exact={true} component={Home}/>
          <Route path= "/login" component={Login}/>
          <Route path= "/registration" component={Registration}/>
          <Route path= "/form" component={Form}/>
          <Route path= "/form-confirm" component={FormConfirmation}/>
        </Switch>
      </Router>
      <Footer/>
      
    </div>
  
  }
}

export default App;
