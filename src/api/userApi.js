const { default: axiosClient } = require("./axiosClient")
const userApi = {}

userApi.signUp = async (params) => {
    const url = '/auth/sign-up'
    return await axiosClient.post(url,params)
}
userApi.signIn = async (params) => {
    const url= `/auth/sign-in`
    return await axiosClient.post(url,params)
}
userApi.signInAfterReload = async()=>{
    const url= `/auth/me`
    return await axiosClient.post(url)
}
export default userApi