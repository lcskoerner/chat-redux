/* eslint-disable import/prefer-default-export */
// TODO: add and export your own actions
export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const MESSAGE_POSTED = 'MESSAGE_POSTED';
export const SELECTED_CHANNEL = 'SELECTED_CHANNEL';

export const fetchMessages = (channel) => {
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  const promise = fetch(url)
    .then(response => response.json());

  return {
    type: FETCH_MESSAGES,
    payload: promise
  };
};

export const createMessage = (channel, author, content) => {
  console.log(author);
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  const body = { author, content };
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(response => response.json());

  return {
    type: MESSAGE_POSTED,
    payload: promise
  };
};

export const setChannel = (channel) => {
  return {
    type: SELECTED_CHANNEL,
    payload: channel
  };
};
