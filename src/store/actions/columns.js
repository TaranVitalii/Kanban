import { GET_COLUMNS, UPDATE_CARD_COLUMN } from "../constants";

export function getColumns(token) {
  return {
    type: GET_COLUMNS,
    payload: token
  };
}
export function updateCardColumn(value) {
  return {
    type: UPDATE_CARD_COLUMN,
    payload: value
  };
}
