import styled from "styled-components";
import { Section } from "./Section";

const Wrapper = styled.div`
  width: 600px;
  margin: auto;
  color: #585858;
`;

export const PrintPage = ({ data }) => {
  return (
    <Wrapper>
      {data.map((section) => (
        <Section key={section.title} section={section} />
      ))}
    </Wrapper>
  );
};
