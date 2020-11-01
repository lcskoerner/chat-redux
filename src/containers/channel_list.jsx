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
      <div className="channel-list">
        {channels.map(channel => <p key={channel}># {channel}</p>)}
      </div>
    );
  }
}

export default ChannelList;
