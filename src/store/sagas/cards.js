import { takeLetest, call } from "redux-saga/effects";
import { GET_CARDS } from "../constants";
import makeAsyncRequest from "./makeAsyncRequest";

function* getCards() {
  const action = () => call(getCards);
  yield makeAsyncRequest(action, GET_CARDS);
}

function* watchGetCards() {
  yield takeLetest(GET_CARDS, getCards);
}

export default [watchGetCards];
