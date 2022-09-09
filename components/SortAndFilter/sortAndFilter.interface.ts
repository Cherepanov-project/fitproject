import { IData } from "@/containers/Layout-admin/DataWrapper/dataWrapper.interface";
import { IConfigsPage } from "@/containers/Layout-admin/ContentWrapper/contentWrapper.interface";

export interface IProps {
    config: Omit<IConfigsPage, 'key' | 'method'>;
    updateList: () => void;
    data: IData[]
}