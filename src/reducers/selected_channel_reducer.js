import { SELECTED_CHANNEL } from "../actions";

export default function(state = null, action) {
  switch (action.type) {
    case SELECTED_CHANNEL: {
      return action.payload;
    }
    default:
      return state;
  }
}
