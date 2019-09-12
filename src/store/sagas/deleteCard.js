import { takeLetest, call } from "redux-saga/effects";
import { DELETE_CARD } from "../constants";
import makeAsyncRequest from "./makeAsyncRequest";

function* deleteCard() {
  console.log("delete");
  const action = () => call(deleteCard);
  yield makeAsyncRequest(action, DELETE_CARD);
}

function* watchDeleteCard() {
  yield takeLetest(DELETE_CARD, deleteCard);
}

export default [watchDeleteCard];
