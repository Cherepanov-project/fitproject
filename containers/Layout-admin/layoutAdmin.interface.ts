import { ReactNode } from "react"

export type layoutAdminProps = {
  children: ReactNode
  props?: Array<string>
}
export type TStyledDiv = {
  selected: boolean
  divider: boolean
}

export type TStyledInput = {
  errorProps: boolean
}
