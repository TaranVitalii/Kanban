import "./Table.css";
import React from "react";
import getColumns from "../services/columns";
import Columns from "../components/Columns";
import getCards from "../services/cards";

export default class TableContainer extends React.Component {
  state = {
    columns: [],
    cards: []
  };

  componentDidMount() {
    getColumns().then(res => {
      this.setState({ columns: res.data });
    });
    getCards().then(res => {
      this.setState({
        cards: res.data
      });
    });
  }

  render() {
    return (
      <div className="TableContainer">
        <Columns cards={this.state.cards} columns={this.state.columns} />
      </div>
    );
  }
}
