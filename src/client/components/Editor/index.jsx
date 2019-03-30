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
        <h3><span className="badge badge-secondary">Editor</span></h3>
        <button type="button" className="btn btn-dark submit">Submit</button>
      </div>
    );
  }
}
