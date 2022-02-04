/* eslint-disable import/no-anonymous-default-export */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

// add class based component that is responsible for watching 
// input for a user

class CommentBox extends Component {
    state = { comment: '' };

    handleChange = event => {
        this.setState({ comment: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();

        this.props.saveComment(this.state.comment);
        // TODO Call an action creator
        // And save the comment
        this.setState({ comment: '' });
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h4>Add a Comment</h4>

                {/* add event handler in text area to change state */}
                <textarea onChange={this.handleChange} value={this.state.comment} />

                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        );
    }
}

export default connect(null, actions) (CommentBox);