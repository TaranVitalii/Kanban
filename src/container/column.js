import React from "react";

import getColumns from "../services/columns.js";
import Columns from "../components/Columns.js";
import getCards from "../services/cards.js";

class ColumnContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: []
    };
  }
  componentDidMount() {
    getColumns().then(res => {
      const columns = res.data;
      this.setState({ columns });
    });
  }

  render() {
    return (
      <div className="ColumnContainer">
        <Columns dataColumn={this.state} dataCard={this.props} />
      </div>
    );
  }
}
export default ColumnContainer;
