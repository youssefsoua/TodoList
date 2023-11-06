import Api from "../api";

export const getAllTodos = async () => {
  const response = await Api().get("todos");
  return response.data;
};
