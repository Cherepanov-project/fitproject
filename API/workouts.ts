import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3001/',
    responseType: 'json',
    headers: {

    }
})

export const fetchWorkouts = async () => {
    const response = await instance.get('workouts')
    return response
}

