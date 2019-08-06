import React from "react";
import Cards from "../components/Cards.js";
import "./columns.css";

function Columns(props) {
  let { dataColumn, dataCard } = props;
  const arrColumnsJSX = dataColumn.map(element => (
    <div className="columns" id={element.id} key={element.id}>
      {element.title}
      <i className="fa fa-plus-circle" />
      <Cards data={dataCard[element.id]} />
    </div>
  ));

  return <div id="desk">{arrColumnsJSX}</div>;
}

export default Columns;
