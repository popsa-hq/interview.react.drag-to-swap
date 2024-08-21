import styled from "styled-components";
import { Actions } from "./Actions";
import { ImageSection } from "./ImageSection";

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`;

export const Section = ({ section }) => {
  return (
    <>
      <Header>
        <Title>{section.title}</Title>
        <Actions />
      </Header>
      <ImageSection images={section.images} />
    </>
  );
};
