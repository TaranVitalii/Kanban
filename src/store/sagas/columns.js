import { takeLatest, call } from "redux-saga/effects";
import getColumns from "../../services/columns";
import { GET_COLUMNS } from "../constants";
import makeAsyncRequest from "./makeAsyncRequest";

function* getColumnsSaga(mainAction) {
  const action = () => call(getColumns, mainAction.payload);
  yield makeAsyncRequest(action, GET_COLUMNS);
}

function* watchGetColumns() {
  yield takeLatest(GET_COLUMNS, getColumnsSaga);
}

export default [watchGetColumns];
