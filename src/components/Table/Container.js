import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getColumnsFromState } from "../../store/selectors/columns";
import { getColumns } from "../../store/actions/columns";
import { loadState } from "../../utils/localStorage";

const TableContainer = Component =>
  class TableContainer extends React.Component {
    componentDidMount() {
      const token = loadState("token");
      this.props.getColumns(token);
    }

    render() {
      return <Component {...this.props} />;
    }
  };

function mapStateToProps(state) {
  return { columns: getColumnsFromState(state) };
}

export default compose(
  connect(
    mapStateToProps,
    { getColumns }
  ),
  TableContainer
);
