import axios, { AxiosInstance } from "axios";

const createAxiosInstance = (): AxiosInstance => {
  return axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
  });
};

export default createAxiosInstance;
