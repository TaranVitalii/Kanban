import axios from "axios";

async function getColumns() {
  let columnResponse = await axios.get(`/api/column`);
  return columnResponse;
}

export default getColumns;
