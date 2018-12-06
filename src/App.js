import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Menu from './components/Menu/Menu';

// import Articles from './components/Articles/Articles';
// import Footer from './components/Footer/Footer';
// import Header from './components/Header/Header';
// import Menu from './components/Menu/Menu';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {this.showContentMenus(routes)}
        </div>
      </Router>
    );
  }

  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        )
      });
    }
    return <Switch>{result}</Switch>
  }
}

export default App;
