import axios from "axios";



const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "8d5bcc0f-d8f0-4670-8b16-b269f20643b5"
    }
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)

    },

    followUser(id){
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },

    unfollowUser(id){
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    }

}

export const authAPI = {
    auth(){
        return instance.get(`auth/me`,)
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userID)  {
        return instance.get(`profile/${userID}`,)
            .then(response => response.data)
    }
}
