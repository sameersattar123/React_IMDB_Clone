import axios from "axios"

export const CategoryMovies = async(API_URL) => {
    try {
       let response =  await axios.get(API_URL)
       return response.data
    } catch (error) {
     console.log(error.message)   
    }
}