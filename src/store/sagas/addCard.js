import { takeLatest, call } from "redux-saga/effects";
import { addCard } from "../../services/cards";
import { ADD_CARD } from "../constants";
import makeAsyncRequest from "./makeAsyncRequest";

function* addCardSaga(mainAction) {
  const action = () => call(addCard, mainAction.payload);
  yield makeAsyncRequest(action, ADD_CARD);
}

function* watchAddCard() {
  yield takeLatest(ADD_CARD, addCardSaga);
}

export default [watchAddCard];
