const { default: axiosClient } = require("./axiosClient")
const filmApi = {}

filmApi.getAll = async (params) => {
    const url = '/get-film/film'
    return await axiosClient.get(url, {params})
}
filmApi.getOne = async (params) => {
    const url= `/film/get-film`
    return await axiosClient.get(url,{params})
}

export default filmApi;