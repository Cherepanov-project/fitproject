import { IDailyRationType } from "@/models/models.interface"

export interface IDropMenuProps {
    $display: boolean
}

export interface IItemDivProps {
    fontSize?: string
    color?: string
}

export interface IItemRationProps {
    dietaEl: IDailyRationType
    asPath: string
    menuClickShow?: (id: string) => void
}
