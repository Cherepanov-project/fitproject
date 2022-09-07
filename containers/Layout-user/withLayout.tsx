import { FC } from "react"
import { UserLayout } from "./layoutUser"

interface IWithLayout extends FC {
  getLayout?: FC
}

export const WithLayout = (Component: IWithLayout) => {
  Component.getLayout = () => (
    <UserLayout>
      <Component />
    </UserLayout>
  )

  return Component
}
