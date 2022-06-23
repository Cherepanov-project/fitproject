import axios from "axios";

const instance = axios.create({
    baseURL: 'https://spring-boot-fitness-backend.herokuapp.com/',
    responseType: 'json',
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0aW1pa29zIiwiZXhwIjoxNjU2MDA3Nzg2LCJpYXQiOjE2NTU5ODk3ODZ9.cKU2MUzrl62lGI_OlnYWgvEFMPQPMhXRSJ1tmjfiGC0WJNmjoVhZFB41v6wcmNEEsLACnCpNDh3Au0seDx4CCQ",
    }
})

export const fetchWorkouts = async () => {
    const response = await instance.get('api/v1/admin/exercise')
    return response
}

export const fetchCategories = async () => {
    const response = await instance.get('categories')
    return response
}

