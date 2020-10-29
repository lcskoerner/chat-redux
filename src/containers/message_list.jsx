/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from '../components/message';
import MessageForm from './message_form';

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

class MessageList extends Component {
  render() {
    return (
      <div>
        <p>Channel # {this.props.selectedChannel}</p>
        {this.props.messages.map(message => <Message message={message} />)}
        <MessageForm />
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(MessageList);
