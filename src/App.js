import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import createApp, {getShopOrigin} from '@shopify/app-bridge';

const app = createApp({
  apiKey: '16d6ed5795e888c6d9f5c98e64ae8697',
  shopOrigin: 'salacteststore.myshopify.com',
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Order list
          </a>
        </header>
      </div>
    );
  }
}

export default App;
