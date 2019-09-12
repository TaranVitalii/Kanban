import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getColumns } from "../../store/selectors/columns";
import { getColumnsAxios } from "../../store/actions/columnsAndCards";
import { loadState } from "../../utils/localStorage";

const TableContainer = Component =>
  class TableContainer extends React.Component {
    componentDidMount() {
      const token = loadState("token");
      this.props.getColumnsAxios(token);
    }

    render() {
      return <Component {...this.props} />;
    }
  };

function mapStateToProps(state) {
  return { columns: getColumns(state) };
}

export default compose(
  connect(
    mapStateToProps,
    { getColumnsAxios }
  ),
  TableContainer
);
