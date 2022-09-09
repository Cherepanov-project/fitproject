import React, { useEffect, FC } from "react"
import { UserLayout } from "./layoutUser"
import { socket } from "@/utils/chatsConfig/default"
import Notification from "@/components/Notification/Notification"
import { Role } from "@/models/role/role"

interface IWithLayout extends FC {
  getLayout?: FC
}

export const WithLayout = (Component: IWithLayout) => {
  Component.getLayout = function () {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      const room = {
        roomId: "1", //Заменить на user ID
        userName: "User", //Заменить на userName
      }
      socket.emit("ROOM:USER_JOIN", room)
    }, [])
    return (
      <UserLayout>
        <Notification role={Role.USER} />
        <Component />
      </UserLayout>
    )
  }
  return Component
}
