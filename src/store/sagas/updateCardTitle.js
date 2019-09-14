import { takeLetest, call } from "redux-saga/effects";
import { UPDATE_CARD_TITLE } from "../constants";
import makeAsyncRequest from "./makeAsyncRequest";

function* updateCardTittle() {
  console.log("delete");
  const action = () => call(updateCardTittle);
  yield makeAsyncRequest(action, UPDATE_CARD_TITLE);
}

function* watchUpdateCardTittle() {
  yield takeLetest(UPDATE_CARD_TITLE, updateCardTittle);
}

export default [watchUpdateCardTittle];
