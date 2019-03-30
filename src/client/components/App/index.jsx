import React, { Component } from 'react';
import Channels from '../Channels';
import Messages from '../Messages';
import Editor from '../Editor';
import './App.scss';

export default class App extends Component {

  componentDidMount() {
    /*fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));*/
  }

  render() {
    return (
      <div className="message--board">
        <Channels />
        <Messages />
        <Editor />
      </div>
    );
  }
}
