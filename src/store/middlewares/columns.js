import getColumns from "../../services/columns";
import { successAction, failureAction } from "../types";
import { GET_COLUMNS } from "../constants";

export default store => next => action => {
  if (action.type === GET_COLUMNS) {
    getColumns(action.payload)
      .then(columns =>
        store.dispatch({
          type: successAction(GET_COLUMNS),
          payload: columns.data
        })
      )
      .catch(error =>
        store.dispatch({
          type: failureAction(GET_COLUMNS),
          error
        })
      );
  } else {
    return next(action);
  }
};
