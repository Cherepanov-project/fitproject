import avatarUser from "@/common/images/userTableItem/avatarUser.jpg"
import { IUser } from "@/components/PageComponents/PageUsers/pageUsers.interface"

export const monthArr: string[] = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
]

export const initalStateUser: IUser = {
    id: 0,
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: 0,
    gender: "",
    coach: false,
    avatar: avatarUser,
}
