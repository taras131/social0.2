import axios from "axios";

const instansAxios = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": "a826950f-e1f9-44f3-85bf-f58a3001ee89"
    },
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})
export const APIPersons = {
    getPersons(currentPage: number, pageSize: number) {
        return instansAxios.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    removeColleague(userId: number) {
        console.log(userId)
        return instansAxios.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    addColleague(userId: number) {
        return instansAxios.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    }
}
export const APIProfile = {
    getProfile(id: number) {
        return instansAxios.get(`profile/${id}`)
    },
    getMyStatusAPI(id: number) {
        return instansAxios.get(`profile/status/${id}`)
    },
    updateMyStatus(status: string) {
        return instansAxios.put(`profile/status`, {status});
    },
    setProfilePhoto(file: any) {
        const formData = new FormData();
        formData.append("image", file)
        return instansAxios.put(`/profile/photo`,formData, {
            headers:{
            "Content-Type": `multipart/form-data`
            }
        });
    },
    updateProfile(formData: any) {
        return instansAxios.put(`/profile`, formData);
    }
}
export enum ResultCodeEnum {
    Success = 0,
    Error = 1
}
export enum ResultCodeEnumWithCapcha {
    Success = 0,
    Error = 1,
    CapchaIsRequired = 10
}
type GetAuthMeType = {
    data: { id: number, email: string, login: string }
    resultCode: ResultCodeEnum
    messages:Array<string> | null
}
type LoginType = {
    data: { userId: number}
    resultCode: ResultCodeEnumWithCapcha
    messages:Array<string> | null
}
export const APIHeader = {
    getAuthMe() {
        return instansAxios.get<GetAuthMeType>(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    login(formData: any) {
        return instansAxios.post<LoginType>(`/auth/login`, {
            email: formData.login, password: formData.password,
            rememberMe: formData.rememberMe, captcha: formData.captcha
        }).then (response => response.data)
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
