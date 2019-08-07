import axios from "axios";

const getCards = async () => await axios.get(`/api/card`);
export default getCards;
