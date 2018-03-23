import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = { comment: '' };
  }

  handleChange(event) {
    this.setState({ comment: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className='comment-box'>
        <h1>Add A Comment</h1>
        <textarea 
          onChange={this.handleChange.bind(this)}
          value={this.state.comment}
          />
        <button action='submit'>Submit Comment</button>
      </form>
    );
  }
}


export default connect(null, actions)(CommentBox);