import "./Table.css";
import React from "react";
import Columns from "../Columns/";
import { loadState } from "../../utils/localStorage";
import { Redirect } from "react-router-dom";

const TableContainer = ({ columns }) => {
  const token = loadState("token");
  if (token) {
    return <div>{<Columns columns={columns} />}</div>;
  } else {
    return <Redirect to="/login" />;
  }
};

export default TableContainer;
