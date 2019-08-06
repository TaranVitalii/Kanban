import axios from "axios";

async function getCards() {
  let cardResponse = await axios.get(`/api/card`);
  return cardResponse;
}

export default getCards;
