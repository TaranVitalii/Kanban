import {
  GET_CARDS,
  ADD_CARD,
  DELETE_CARD,
  UPDATE_CARD_TITLE
} from "../constants";

export function getCards(token) {
  return {
    type: GET_CARDS,
    payload: token
  };
}
export function addCard(token) {
  return {
    type: ADD_CARD,
    payload: token
  };
}
export function deleteCard(id) {
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
