import React, { Component } from 'react';
import axios from 'axios';
import Spinner from "react-svg-spinner";
import Channels from '../Channels';
import Messages from '../Messages';
import Editor from '../Editor';
import './App.scss';
import { BASE_API_URL } from '../../constants';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: [],
      loading: false,
    };

    this.addMessage = this.addMessage.bind(this);
  }

  componentDidMount() {
    this.setState({loading: true});

    axios
      .get(BASE_API_URL)
      .then(response => {
        const data = response.data;
        this.setState({
          channels: data,
          loading: false,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  addMessage(message) {
    axios
      .put(BASE_API_URL + 'backend/channel',  { message })
      .then(response => {
        //const data = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const {channels, loading} = this.state;
    console.log('channels: ', channels);
    console.log('loading: ', loading);

    return (
      <div className="message--board">
        <Channels />
        <Messages />
        <Editor
          onClickHandler={this.addMessage}
        />
      </div>
    );
  }
}
