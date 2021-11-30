import React, { Component } from 'react';
import Route from './src/routes'
import { RootAppSpinner } from './src/util/RootAppSpinner'
import { Auth } from './src/server communication/BaseUrl'
import base64 from 'react-native-base64'
import { validateUser } from './src/store/actions/UserActions';
import ChatInstance, { initChatApp } from './CometChat';
import Key from './CometChat/keys';
import { co } from 'co';


initChatApp();

export default class App extends Component {

  componentDidMount() {

    // const url = 'https://api-us.cometchat.io/v2.0/279b4edab5624c3da10ea5e8106d40862ddd74f8';

    // fetch(url, {
    //   headers: { Accept: 'application/json', 'Content-Type': 'application/json' }
    // }).then(response => {
    //   return response.json();
    // }).then(result => {
    //   console.log(result);
    // })

    // ChatInstance()
    // const url = Auth.validate('demo');
    // validateUser({ safe: 'demo', username: '42SP3', password: '345678' }).then(response => {
    //   console.log('Response --->', response)
    // });

    // this.auth = 'Basic ' + base64.encode('USERName' + ":" + 'USERPassword');
    // console.log(this.auth);

    // fetch('https://safe101.com.au/safe101-demo/api/appApi/initMobile', {
    //   headers: {
    //     method: 'POST',
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json',
    //       'Authorization': this.auth
    //     }
    //   }
    // }).then(response => {
    //   return response.json();
    // }).then(result => {
    //   console.log("result--->", result.status)
    // })
  }

  render() {
    return (
      <>
        <Route />
        {/* <RootAppSpinner /> */}
      </>
    );
  }
}
