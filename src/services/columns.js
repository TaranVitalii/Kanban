import axios from "axios";

const getColumns = async () => await axios.get(`/api/column`);
export default getColumns;
