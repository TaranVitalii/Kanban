import axios from "axios";

export const getCards = async token =>
  await axios.get(`/api/card`, {
    headers: { Authorization: `Bearer ${token}` }
  });

export const addCard = async token => {
  const cardText = "";
  const columnId = 0;
  const card = { title: cardText, column: columnId };
  return await axios.post("/api/card", card, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const deleteCard = async ({ cardId, token }) => {
  return await axios.delete(`/api/card/${cardId}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const updateCard = async (cardId, newText, token) => {
  console.log(token);
  const editorNode = { title: newText };
  return await axios.patch(`/api/card/${cardId}`, editorNode, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const updateColumnId = async (cardId, newColumnId, token) => {
  const editorColumnId = { column: newColumnId };
  return await axios.patch(`/api/card/${cardId}`, editorColumnId, {
    headers: { Authorization: `Bearer ${token}` }
  });
};
