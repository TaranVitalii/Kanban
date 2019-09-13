import { takeLatest, call } from "redux-saga/effects";
import { getCards } from "../../services/cards";
import { GET_CARDS } from "../constants";
import makeAsyncRequest from "./makeAsyncRequest";

function* getCardsSaga(mainAction) {
  const action = () => call(getCards, mainAction.payload);
  yield makeAsyncRequest(action, GET_CARDS);
}

function* watchGetCards() {
  yield takeLatest(GET_CARDS, getCardsSaga);
}

export default [watchGetCards];
