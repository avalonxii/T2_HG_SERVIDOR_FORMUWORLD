import axios from "axios";
import cors from "cors";

const url = "http://localhost:8081/api/pregunta";

export const getallFormus = async (id) => {
  id = id || "";
  return await axios.get(`${url}/all${id}`);
};

export const addFormu = async (formu) => {
  return await axios.post(`${url}/save`, formu);
};

export const editFormu = async (id, formu) => {
  return await axios.put(`${url}/${id}`, formu);
};

export const deleteFormu = async (id) => {
  return await axios.delete(`${url}/value/${id}`);
};
