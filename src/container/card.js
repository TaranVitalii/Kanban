// import React from "react";
// import ColumnContainer from "./column.js";
// import getCards from "../services/cards.js";

// class CardContainer extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       cardsArr: []
//     };
//   }
//   componentDidMount() {
//     getCards().then(res => {
//       let cardsToDo = [];
//       let cardsInProgress = [];
//       let cardsDone = [];
//       const cards = res.data;
//       cards.forEach(item =>
//         item.column === 0
//           ? cardsToDo.push(item)
//           : item.column === 1
//           ? cardsInProgress.push(item)
//           : item.column === 2
//           ? cardsDone.push(item)
//           : console.log(`${item} uncorect group`)
//       );
//       const cardsArr = [cardsToDo, cardsInProgress, cardsDone];
//       this.setState({ cardsArr });
//     });
//   }

//   render() {
//     return (
//       <div className="CardContainer">
//         <ColumnContainer data={this.state.cardsArr} />
//       </div>
//     );
//   }
// }
// export default CardContainer;
