import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:8001",
  headers: {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export const getData = () => {
  return axios.get("/api/addresses");
};

export const postData = (payload) => {
  return axios.post("/", payload);
};
