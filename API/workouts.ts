import { instanceWorkouts } from "./inctances"
import Cookies from "js-cookie"
import { API_WORKOUTS } from "../constants/urls"

const getWorkoutList = async () => {
  const response = await instanceWorkouts.get("/")
  
  //const adminToken =   "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbjEiLCJleHAiOjE2NTgwNzg0MjUsImlhdCI6MTY1ODA2MDQyNX0.m_FzysaaCTtE5aR8jhR9XvOFMZ82fAAnt5f6Ipchs6Ein_iYpNzUD_NeLUylz0HC7dWOqIwPngkpbnWFXC6tRw";
/*
  let userToken = Cookies.get('user-token')
  adminToken = userToken.replace(/^\"/, '', userToken).replace(/\"$/, '', userToken);
  console.log(userToken);
  
  const headers = {
    Authorization: `Bearer ${adminToken}`
  };
 
  console.log(headers);

  const response = await instanceWorkouts.get(API_WORKOUTS, {
	 //headers: {
	 //  Authorization: `Bearer ${Cookies.get('auth-token')}`
	 //}
    headers
  })
*/
    return response.data.data.content
}

// Заглушка для АПИ под категории упражнений
const getWorkoutCategoriesList = async () => {
    const response = await instanceWorkouts.get("categories")
    return response.data
}

export { getWorkoutList, getWorkoutCategoriesList }
