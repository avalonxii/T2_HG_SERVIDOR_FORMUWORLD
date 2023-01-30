import axios from "axios";

const url = 'http://localhost:8081/api/pregunta'

export const getallUsers = async (id) => {
    id = id || '';
    return await axios.get(`${url}/all${id}`);
}

export const addUser = async (formu) => {
    return await axios.post(`${url}/save`,formu);
}

export const editUser = async (id, formu) => {
    return await axios.put(`${url}/${id}`,formu);
}


export const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`);
}