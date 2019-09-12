import { successAction, failureAction } from "../types";
import { GET_COLUMNS } from "../constants.js";

const initialState = {
  data: []
};

export default function Columns(state = initialState, action) {
  switch (action.type) {
    case GET_COLUMNS:
      return {
        ...state
      };
    case successAction(GET_COLUMNS):
      return {
        data: action.payload
      };
    case failureAction(GET_COLUMNS):
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
}
