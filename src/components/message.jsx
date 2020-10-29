/* eslint-disable react/prefer-stateless-function */
import React from 'react';

const Message = (props) => {
  const { author, content, created_at } = props.message;
  const timestamp = created_at.split('T')[1].split('.')[0];
  return (
    <div>
      <p>{author} – {timestamp}</p>
      <p>{content}</p>
    </div>
  );
};

export default Message;
