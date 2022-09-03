import Link from "next/link"

import {
  DietaHead,
  HeadLink,
  StyledHeadText,
  StyledNameComponent,
} from "./headLinkBack.styles"

const HeadLinkBack = ({ namesComponent, backLink }) => {
  return (
    <DietaHead>
      <div>
        <Link href={backLink} passHref>
          <HeadLink>
            {"\u003C"} {"\u007C"}{" "}
            <StyledHeadText>Back to schedule</StyledHeadText>
          </HeadLink>
        </Link>
      </div>
      <StyledNameComponent>{namesComponent}</StyledNameComponent>
    </DietaHead>
  )
}

export default HeadLinkBack
