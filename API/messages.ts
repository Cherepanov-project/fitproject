import {instanceChat} from "@/API/inctances";

export const getRooms = async () => {
    const {data} = await instanceChat.get(`/`)
    return data
}
export const getRoomData = async roomId => {
    const {data} = await instanceChat.get(
        `/${roomId}`
    )
    return data
}
export const addRoom = async room => {
    await instanceChat.post("/", room)
}
