import React, { Component } from 'react';
import './Editor.scss';

export default class Editor extends Component {

  componentDidMount() {
    /*fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));*/
  }

  render() {
    return (
      <div className="editor">
        Editor
      </div>
    );
  }
}
