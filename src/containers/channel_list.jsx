/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class ChannelList extends Component {
  render() {
    const channels = [
      "general",
      "react",
      "paris"
    ];

    return (
      <div>
        {channels.map(channel => <p>{channel}</p>)}
      </div>
    );
  }
}

export default ChannelList;
