import { compose, applyMiddleware } from "redux";

import columns from "./columns";
import cards from "./cards";
import addCard from "./addCard";
import deleteCard from "./deleteCard";
import updateCardTitle from "./updateCardTitle";
import updateCardColumn from "./updateCardColumn";

const g = global || window;
const composeEnhancers =
  typeof g === "object" && g.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? g.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const middleware = [
  columns,
  cards,
  addCard,
  deleteCard,
  updateCardTitle,
  updateCardColumn
];

export default composeEnhancers(applyMiddleware(...middleware));
