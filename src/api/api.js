import * as axios from "axios";

const instansAxios = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "a826950f-e1f9-44f3-85bf-f58a3001ee89"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})

export const APIPersons = {
    getPersons(currentPage, pageSize) {
        return instansAxios.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            });
    },
    removeColleague(id) {
        return instansAxios.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    addColleague(id) {
        return instansAxios.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    }
}
