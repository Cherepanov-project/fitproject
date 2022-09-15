import { IConfigsPage } from "@/containers/Layout-admin/ContentWrapper/contentWrapper.interface";

export interface IData {
    id: number;
    [key: string]: any
}

export interface IProps {
    config: IConfigsPage
}