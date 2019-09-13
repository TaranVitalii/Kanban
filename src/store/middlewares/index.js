import { compose, applyMiddleware } from "redux";
import sagas, { run as runSagas } from "../sagas";
// import columns from "./columns";
// import cards from "./cards";
// import addCard from "./addCard";
// import deleteCard from "./deleteCard";
// import updateCardTitle from "./updateCardTitle";
// import updateCardColumn from "./updateCardColumn";

const g = global || window;
const composeEnhancers =
  typeof g === "object" && g.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? g.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const middleware = [sagas];

export default composeEnhancers(applyMiddleware(...middleware));

export const run = () => runSagas();
