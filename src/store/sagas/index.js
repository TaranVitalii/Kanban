import createSagaMiddleware from "redux-saga";
import { fork, all } from "redux-saga/effects";

import columns from "./columns";
import cards from "./cards";
import addCard from "./addCard";
import deleteCard from "./deleteCard";
import updateTitle from "./updateCardTitle";
import updateCardColumn from "./updateCardColumn";

const sagaMiddleware = createSagaMiddleware();

export default sagaMiddleware;

function* root() {
  const watchers = [
    columns,
    cards,
    addCard,
    deleteCard,
    updateTitle,
    updateCardColumn
  ];
  yield all(watchers.map(fork));
}

export const run = () => sagaMiddleware.run(root);
