import { successAction, failureAction } from "../types";
import { GET_CARDS, UPDATE_CARDS } from "../constants.js";

const initialState = {
  data: []
};

export default function Cards(state = initialState, action) {
  switch (action.type) {
    case GET_CARDS:
      return {
        ...state
      };
    case successAction(GET_CARDS):
      return {
        data: action.payload
      };
    case failureAction(GET_CARDS):
      return {
        ...state,
        error: action.error
      };
    case successAction(UPDATE_CARDS):
      return {
        data: action.payload
      };

    default:
      return state;
  }
}
