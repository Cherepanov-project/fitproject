import {instanceChat} from "@/API/inctances";
import {IRoomBaseInfo} from "@/models/messages/messages";

export const getRooms = async () => {
    const {data} = await instanceChat.get(`/`)
    return data
}
export const getRoomData = async (roomId:string) => {
    const {data} = await instanceChat.get(
        `/${roomId}`
    )
    return data
}
export const addRoom = async (room:IRoomBaseInfo) => {
    const {data} = await instanceChat.post("/", room)
    return data
}
