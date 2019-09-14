import React from "react";
import Cards from "../Cards/";
import { compose } from "redux";
import { connect } from "react-redux";
import { getCardsFromState } from "../../store/selectors/cards";
import { getCards, addCard } from "../../store/actions/cards";
import { updateCardColumn } from "../../store/actions/columns";
import { loadState } from "../../utils/localStorage";
import { splitCardsOnState } from "../../utils/splitCards";

const Container = Component =>
  class Container extends React.Component {
    componentDidMount() {
      const token = loadState("token");
      this.props.getCards(token);
    }
    addCardHandler = e => {
      const token = loadState("token");
      this.props.addCard(token);
    };
    dragOver = e => {
      e.preventDefault();
    };
    drop = e => {
      e.preventDefault();
      const targetColumnId = Number(e.target.closest(".columns").id);
      const { cardId, columnId } = JSON.parse(e.dataTransfer.getData("object"));
      if (targetColumnId !== columnId) {
        const newColumnId = Number(targetColumnId);
        const token = loadState("token");
        const value = { cardId, newColumnId, token };
        this.props.updateCardColumn(value);
      }
    };

    render() {
      const { cardsToDo, cardsInProgress, cardsDone } = this.props.cards;

      let toDoCards = cardsToDo.map(card => {
        return <Cards card={card} key={card._id} />;
      });
      let inProgressCards = cardsInProgress.map(card => {
        return <Cards card={card} key={card._id} />;
      });
      let doneCards = cardsDone.map(card => {
        return <Cards card={card} key={card._id} />;
      });

      const plusBattonIcon = (
        <i className="fa fa-plus-circle" onClick={this.addCardHandler} />
      );
      const allColumns = this.props.columns.map((column, index) => (
        <div
          className="columns"
          id={column.id}
          key={index}
          onDragOver={this.dragOver}
          onDrop={this.drop}
        >
          {column.title}
          {column.id === 0 && plusBattonIcon}
          {column.id === 0
            ? toDoCards
            : column.id === 1
            ? inProgressCards
            : column.id === 2
            ? doneCards
            : null}
        </div>
      ));
      return <Component {...this.props} columns={allColumns} />;
    }
  };

function mapStateToProps(state) {
  return { cards: splitCardsOnState(getCardsFromState(state)) };
}

export default compose(
  connect(
    mapStateToProps,
    { getCards, addCard, updateCardColumn }
  ),
  Container
);
