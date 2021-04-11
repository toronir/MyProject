import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        //"API-KEY": "426bf97f-fe77-49c9-9e9b-d520a30f7142"
        "API-KEY": "04e4869e-d4f4-48fe-b561-00f1e88e959f"
    }
});

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
     getProfile(userId) {
        console.warn("Obsolete method. Please use profileAPI object")
        return profileAPI.getProfile(userId)
    },
    getUnfollow(id = 1) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    },
    getFollow(id = 1) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email,password,rememberMe = false){
        return instance.post(`auth/login`,{email,password,rememberMe})
    },
    logout(){
        return instance.delete(`auth/login`)
    },
    getAuthUserProfile(userId) {
        return instance.get(`/profile/` + userId)
    },
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`/profile/` + userId)
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status:status})
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image",photoFile)
        return instance.put(`profile/photo`, formData, {headers: {'Content-Type': 'multipart/form-data'}})
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile)
    },
}

