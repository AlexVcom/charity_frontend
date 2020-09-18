import React, {Component} from 'react';
// import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Home from './components/Index.js'
import Login from './components/Login.js'
import Registration from './components/Registration.js'
import Test from './components/TEST.js'
import FormConfirmation from './components/FormConfirmation.js'
// import '/Users/alex/PORTFOLIO_LAB/charity_frontend/public/style.css'




import { BrowserRouter as Router,
  Route,Switch
} from 'react-router-dom';


  class App extends Component {
  render () {
    return <div className="App">
      <Router>
        {/* <Header/> */}
        <Switch>
          <Route path= "/" exact={true} component={Home}/>
          <Route path= "/test" exact={true} component={Test}/>
          <Route path= "/login" component={Login}/>
          <Route path= "/registration" component={Registration}/>
          <Route path= "/form-confirm" component={FormConfirmation}/>
        </Switch>
      </Router>
      <Footer/>
      
    </div>
  
  }
}

export default App
