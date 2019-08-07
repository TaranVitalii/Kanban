import React from "react";
import Cards from "../components/Cards";
import "./columns.css";

const Columns = props => {
  let { columns, cards } = props;
  const plusBattonIcon = <i className="fa fa-plus-circle" />;
  const allColumns = columns.map(column => (
    <div className="columns" id={column.id} key={column.id}>
      {column.title}
      {column.id === 0 && plusBattonIcon}
      <Cards cards={cards} columnId={column.id} />
    </div>
  ));

  return <div className="desk">{allColumns}</div>;
};
export default Columns;
