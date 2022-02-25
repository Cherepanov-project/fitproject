import styled from "styled-components";
import Link from "next/link";

const DietaHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 10%;
  margin-right: 10%;
  font-size: 18px;
  font-weight: bold;
  padding-top: 20px;
`;

const HeadLink = styled.a`
  text-decoration: none;
  color: black;
  cursor: pointer;
  word-spacing: 12px;
`;

const HeadLinkBack = ({ namesCompoent, backLink }) => {
  return (
    <DietaHead>
      <div>
        <Link href={backLink}>
          <HeadLink>
            {"\u003C"} {"\u007C"} Вернуться
          </HeadLink>
        </Link>
      </div>
      <div>{namesCompoent}</div>
    </DietaHead>
  );
};

export default HeadLinkBack;
