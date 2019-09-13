import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { deleteCard, updateCardTitle } from "../../store/actions/cards";
import { loadState } from "../../utils/localStorage";

const Container = Component =>
  class Container extends React.Component {
    removeCardHandler = e => {
      const cardId = this.props.card._id;
      const token = loadState("token");
      const value = { cardId, token };
      this.props.deleteCard(value);
    };
    updateCardTitle = e => {
      if (e.keyCode === 13) {
        e.preventDefault();
        const newText = e.target.value;
        if (newText && newText.length) {
          let cardId = this.props.card._id;
          const token = loadState("token");
          let data = { cardId, newText, token };
          this.props.updateCardTitle(data);
          e.target.value = "";
        }
      } else if (e.keyCode === 27) {
        e.target.value = "";
      }
    };
    onBlurHandler = e => {
      let newText = e.target.value;
      if (newText && newText.length) {
        let cardId = this.props.card._id;
        const token = loadState("token");

        let data = { cardId, newText, token };

        this.props.updateCardTitle(data);
        e.target.value = "";
      }
    };

    dragStart = e => {
      let cardId = this.props.card._id;
      let columnId = e.target.closest(".columns").id;
      let objData = JSON.stringify({
        cardId: cardId,
        columnId: columnId
      });
      console.log("start");
      e.dataTransfer.setData("object", objData);
    };

    render() {
      return (
        <Component
          {...this.props}
          removeCard={this.removeCardHandler}
          updateCardTitle={this.updateCardTitle}
          onBlur={this.onBlurHandler}
          dragStart={this.dragStart}
        />
      );
    }
  };

export default compose(
  connect(
    null,
    { deleteCard, updateCardTitle }
  ),
  Container
);
