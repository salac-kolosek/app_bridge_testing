import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import createApp, {getShopOrigin} from '@shopify/app-bridge';
import {Redirect} from '@shopify/app-bridge/actions';

const apiKey = '16d6ed5795e888c6d9f5c98e64ae8697';
const redirectUri = 'https://app-bridge-testing.herokuapp.com/';
const shopOrigin = 'salacteststore.myshopify.com';
const permissionUrl = `/oauth/authorize?client_id=${apiKey}&scope=read_products,read_content&redirect_uri=${redirectUri}`;

class App extends Component {

  handleButtonClick(event) {
    // If the current window is the 'parent', change the URL by setting location.href
    if (window.top == window.self) {
      window.location.assign(`https://${shopOrigin}/admin${permissionUrl}`)

    // If the current window is the 'child', change the parent's URL with Shopify App Bridge's Redirect action
    } else {
      const app = createApp({
        apiKey: apiKey,
        shopOrigin: shopOrigin,
      });

      Redirect.create(app).dispatch(Redirect.Action.ADMIN_PATH, permissionUrl);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
            <button onClick={this.handleButtonClick}>Shopify auth</button>
        </header>
      </div>
    );
  }
}

export default App;
