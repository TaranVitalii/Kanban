import React from "react";

import getColumns from "../services/columns.js";
import Columns from "../components/Columns.js";
import getCards from "../services/cards.js";

class TableContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [],
      cards: []
    };
  }
  componentDidMount() {
    getColumns().then(res => {
      const columnsArr = res.data;
      this.setState({ columns: columnsArr });
    });
    getCards().then(res => {
      let cardsToDo = [];
      let cardsInProgress = [];
      let cardsDone = [];
      const cards = res.data;
      cards.forEach(item =>
        item.column === 0
          ? cardsToDo.push(item)
          : item.column === 1
          ? cardsInProgress.push(item)
          : item.column === 2
          ? cardsDone.push(item)
          : console.log(`${item} uncorect group`)
      );
      const cardsArr = [cardsToDo, cardsInProgress, cardsDone];
      this.setState({ cards: cardsArr });
    });
  }

  render() {
    return (
      <div className="TableContainer">
        <Columns dataCard={this.state.cards} dataColumn={this.state.columns} />
      </div>
    );
  }
}
export default TableContainer;
