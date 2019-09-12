import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  deleteCardAxios,
  updateCardTitle
} from "../../store/actions/columnsAndCards";
import { loadState } from "../../utils/localStorage";

const Container = Component =>
  class Container extends React.Component {
    removeCardHandler = e => {
      const cardId = e.target.closest(".card").getAttribute("id");
      const token = loadState("token");
      const value = { cardId, token };
      this.props.deleteCardAxios(value);
    };
    updateCardTitle = e => {
      if (e.keyCode === 13) {
        e.preventDefault();
        const newText = e.target.value;
        if (newText && newText.length) {
          let cardId = e.target.closest(".card").id;
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
        let cardId = e.target.closest(".card").id;
        const token = loadState("token");

        let data = { cardId, newText, token };

        this.props.updateCardTitle(data);
        e.target.value = "";
      }
    };

    dragStart = e => {
      let cardId = e.target.closest(".card").id;
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
    { deleteCardAxios, updateCardTitle }
  ),
  Container
);
