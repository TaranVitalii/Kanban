import { getCards } from "../../services/cards";
import { successAction, failureAction } from "../types";
import { GET_CARDS } from "../constants";

export default store => next => action => {
  if (action.type === GET_CARDS) {
    getCards(action.payload)
      .then(cards =>
        store.dispatch({
          type: successAction(GET_CARDS),
          payload: cards.data
        })
      )
      .catch(error =>
        store.dispatch({
          type: failureAction(GET_CARDS),
          error
        })
      );
  } else {
    return next(action);
  }
};
