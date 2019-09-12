import { takeLetest, call } from "redux-saga/effects";
import { GET_COLUMNS } from "../constants";
import makeAsyncRequest from "./makeAsyncRequest";

function* getColumns() {
  const action = () => call(getColumns);
  yield makeAsyncRequest(action, GET_COLUMNS);
}

function* watchGetColumns() {
  yield takeLetest(GET_COLUMNS, getColumns);
}

export default [watchGetColumns];
