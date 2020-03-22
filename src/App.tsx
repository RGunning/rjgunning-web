import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.scss';
import NavBar from './components/layout/Navbar';
import Home from './views/Home';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <NavBar />
          <main>
            <Switch>
              <Route exact path="/" component={Home}></Route>
            </Switch>
          </main>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
