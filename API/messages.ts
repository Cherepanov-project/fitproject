import axios from "axios"

export const getRooms = async () => {
    const {data} = await axios.get(`https://chat-fitpro.herokuapp.com/rooms`)
    return data
}
export const getRoomData = async roomId => {
    const {data} = await axios.get(
        `https://chat-fitpro.herokuapp.com/rooms/${roomId}`
    )
    return data
}
export const addRoom = async room => {
    await axios.post("https://chat-fitpro.herokuapp.com/rooms", room)
}
