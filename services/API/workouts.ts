import axios from "axios"

const instance = axios.create({
    baseURL: "https://spring-boot-fitness-backend.herokuapp.com/",
    responseType: "json",
    headers: {
        Authorization:
            "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTY1NjM3NzYyMSwiaWF0IjoxNjU2MzU5NjIxfQ.pB2q96w6CMZNrfmFSC78an1h-2d4MK03h87uQTSWYgzRgqQwzquXSX-YHa7HpZDP6M9PGr0ecYIApJNPTgsNOA",
    },
})

const fetchWorkouts = async () => {
    const response = await instance.get("api/v1/admin/exercise")
    return response
}

const fetchCategories = async () => {
    const response = await instance.get("categories")
    return response
}

export { fetchWorkouts, fetchCategories }
