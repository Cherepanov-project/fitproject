export interface IRoomBaseInfo {
    roomId: string
    userName: string
}
export type Message = {
    userName: string
    text: string
    date: Date
}

export interface IRoomFullData {
    _id: string
    roomId: string
    roomOwner: string
    messages: Message[]
}


