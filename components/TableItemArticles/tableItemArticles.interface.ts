import { IArticle } from "@/models/admin/articlesList";

export interface IProps {
    article: IArticle;
    updateList: () => void;
    element: IArticle;
}
