import Link from "next/link"

import { DietaHead, HeadLink } from "./headLinkBack.styles"

const HeadLinkBack = ({ namesComponent, backLink }) => {
    return (
        <DietaHead>
            <div>
                <Link href={backLink} passHref>
                    <HeadLink>
                        {"\u003C"} {"\u007C"} Вернуться
                    </HeadLink>
                </Link>
            </div>
            <div>{namesComponent}</div>
        </DietaHead>
    )
}

export default HeadLinkBack
