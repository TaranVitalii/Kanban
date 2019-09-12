import { takeLetest, call } from "redux-saga/effects";
import { UPDATE_CARD_COLUMN } from "../constants";
import makeAsyncRequest from "./makeAsyncRequest";

function* updateCardColumn() {
  console.log("delete");
  const action = () => call(updateCardColumn);
  yield makeAsyncRequest(action, UPDATE_CARD_COLUMN);
}

function* watchUpdateCardColumn() {
  yield takeLetest(UPDATE_CARD_COLUMN, updateCardColumn);
}

export default [watchUpdateCardColumn];
