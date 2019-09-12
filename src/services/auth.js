import axios from "axios";

export const signIn = async value => {
  return await axios.post(`/api/signin`, value);
};
