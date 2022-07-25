// types
import { IPutUser, IPostUser } from "./api.interface"
import { IPageUsersProps } from "@/components/PageComponents/PageUsers/pageUsers.interface"

// instance
import { instanceUsers } from "./inctances"

export const getUserList = async () => {
    const response = await instanceUsers.get<IPageUsersProps>("?size=99")
    return response.data.data.content
}

export const postUser = async (data: IPostUser) => {
    const response = await instanceUsers.post("/", data)
    return response.data
}

export const getUserById = async (id: number) => {
    const response = await instanceUsers.get(`/${id}`)
    return response.data
}

export const putUserUpdate = async (data: IPutUser) => {
    const response = await instanceUsers.put("/", data)
    return response.data
}

export const deleteUserById = async (id: number) => {
    const response = await instanceUsers.delete(`/${id}`)
    return response.data
}
