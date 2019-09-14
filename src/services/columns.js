import axios from "axios";

const getColumns = async token =>
  await axios.get(`/api/column`, {
    headers: { Authorization: `Bearer ${token}` }
  });
export default getColumns;
