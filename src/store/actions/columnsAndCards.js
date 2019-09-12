import {
  GET_COLUMNS,
  GET_CARDS,
  ADD_CARD,
  DELETE_CARD,
  UPDATE_CARD_TITLE,
  UPDATE_CARD_COLUMN
} from "../constants";

export function getColumnsAxios(token) {
  return {
    type: GET_COLUMNS,
    payload: token
  };
}
export function getCardsAxios(token) {
  return {
    type: GET_CARDS,
    payload: token
  };
}
export function postAddCardsAxios(token) {
  console.log(token);
  return {
    type: ADD_CARD,
    payload: token
  };
}
export function deleteCardAxios(id) {
  return {
    type: DELETE_CARD,
    payload: id
  };
}
export function updateCardTitle(value) {
  return {
    type: UPDATE_CARD_TITLE,
    payload: value
  };
}
export function updateCardColumn(value) {
  return {
    type: UPDATE_CARD_COLUMN,
    payload: value
  };
}
