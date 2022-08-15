import { ReactNode } from "react"

export type layoutUserProps = {
  children: ReactNode
  props?: Array<string>
}

export type TStyledDiv = {
  selected: boolean
  divider?: boolean
}

export type IconWrapperProps = {
  backgroundColor: string
}
