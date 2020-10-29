/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Message from '../components/message';
import MessageForm from './message_form';

class MessageList extends Component {
  render() {
    const messages = [
      "hello",
      "hi",
      "see ya"
    ];

    return (
      <div>
        {messages.map(message => <Message message={message} />)}
        <MessageForm />
      </div>
    );
  }
}

export default MessageList;
