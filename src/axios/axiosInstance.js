import axios from "axios";

export const Instance = axios.create({
  headers: {
    Authorization: "Bearer " + process.env.REACT_APP_API_KEY,
  },
});
