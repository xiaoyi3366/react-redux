import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import Todo from './pages/index/container';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Todo />
        </div>
      </Provider>
    );
  }
}

export default App;
