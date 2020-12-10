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
export const APIProfile = {
    getProfile(id) {
        return instansAxios.get(`profile/${id}`)
    },
    getMyStatusAPI(id) {
        return instansAxios.get(`profile/status/${id}`)
    },
    updateMyStatus(status) {
        return instansAxios.put(`profile/status`, {status});
    },
    setProfilePhoto(file) {
        const formData = new FormData();
        formData.append("image", file)
        return instansAxios.put(`/profile/photo`,formData, {
            headers:{
            "Content-Type": `multipart/form-data`
            }
        });
    },
    updateProfile(formData) {
        return instansAxios.put(`/profile`, formData);
    }
}
export const APIHeader = {
    getAuthMe() {
        return instansAxios.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    login(formData) {
        return instansAxios.post(`/auth/login`, {
            email: formData.login, password: formData.password,
            rememberMe: formData.rememberMe, captcha: formData.captcha
        })
    },
    loginOut() {
        return instansAxios.delete(`/auth/login`)
    }
}
export const APISecurity = {
    getCapchaURL() {
        return instansAxios.get(`security/get-captcha-url`)
    }
}
export const APIColleague = {
    getColleague() {
        return instansAxios.get(`users?count=${100}&friend=${true}`)
    }
}
