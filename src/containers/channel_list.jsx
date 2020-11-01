/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setChannel, fetchMessages } from '../actions/index';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setChannel, fetchMessages }, dispatch);
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

class ChannelList extends Component {
  handleClick = (channel) => {
    this.props.setChannel(channel);
  }

  render() {
    return (
      <div className="channel-list">
        {this.props.channels.map(channel => <p key={channel} onClick={() => this.handleClick(channel)}># {channel}</p>)}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
