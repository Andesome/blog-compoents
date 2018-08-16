import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Detail from './routes/Detail'
import List from './routes/List'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route path='/list' component={List}></Route>
            <Route path='/detail' component={Detail}></Route>
          </div>
        </Router>

      </div>
    );
  }
}

export default App;
