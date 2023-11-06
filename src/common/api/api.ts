import axios, { AxiosInstance } from "axios";

const createAxiosInstance = (): AxiosInstance => {
  return axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/users/1/",
  });
};

export default createAxiosInstance;
