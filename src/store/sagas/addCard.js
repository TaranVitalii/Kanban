import { takeLetest, call } from "redux-saga/effects";
import { ADD_CARD } from "../constants";
import makeAsyncRequest from "./makeAsyncRequest";

function* addCard() {
  console.log("add");
  const action = () => call(addCard);
  yield makeAsyncRequest(action, ADD_CARD);
}

function* watchAddCard() {
  yield takeLetest(ADD_CARD, addCard);
}

export default [watchAddCard];
