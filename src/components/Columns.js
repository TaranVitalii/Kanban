import React from "react";
import Cards from "../components/Cards.js";
import "./columns.css";

function Columns(props) {
  let { dataColumn } = props;
  let dataColumns = dataColumn.columns;
  const dataArrayReact = dataColumns.map(element => (
    <div className="columns" id={element.id} key={element.id}>
      {element.title}
      <i className="fa fa-plus-circle" />
      <Cards data={props.dataCard.data} />
    </div>
  ));

  return <div id="desk">{dataArrayReact}</div>;
}

export default Columns;
