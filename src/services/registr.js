import axios from "axios";

export const registr = async value => {
  return await axios.post(`/api/register`, value);
};
