import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Editor.scss';

export default class Editor extends Component {
  static propTypes = {
    onClickHandler: PropTypes.func,
  };

  static defaultProps = {
    onClickHandler: () => {},
  };

  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  render() {
    const { onClickHandler } = this.props;
    const message = 'some text';

    return (
      <div className="editor">
        <h3><span className="badge badge-secondary">Editor</span></h3>
        <div className="input-group">
          <textarea className="form-control textarea" ref={this.input}></textarea>
        </div>
        <button
          type="button"
          className="btn btn-dark submit"
          onClick={() => onClickHandler(this.input.current.value)}
        >
          Submit
        </button>
      </div>
    );
  }
}
