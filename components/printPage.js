import styled from "styled-components";
import Actions from "./actions";
import { PageSwap } from "../pages/pageswap";
import { DragDrop } from "../pages/draggableitem";

const Wrapper = styled.div`
  width: 600px;
  margin: auto;
  color: #585858;
`;

const PrintWrapper = styled.div``;

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

const PageLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #2778a5;
  border-radius: 8px;
  padding: 20px;
  margin: 17px 0 42px;
  justify-content: space-between;
`;

export default function PrintPage({ data, useManual, setLastEdited }) {

  function formatLastEditedDate() {
    // https://dev.to/diorla/a-guide-to-date-and-time-formatting-in-javascript-2ol2
    const date = new Date();
  
    const options = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
  
    setLastEdited(`Hardback Photobook last edited on ${new Intl.DateTimeFormat('en-GB', options).format(date)}`);
  }

  return (
    <Wrapper>
      {Object.values(data).map((entry, i) => (
        <PrintWrapper key={i}>
          <Header>
            <Title>{entry.title}</Title>
            <Actions />
          </Header>
          <PageLayout>
            {useManual ? (
              <PageSwap key={i} imgData={entry.images} setLastEdited={formatLastEditedDate}/>
            ) : (
              <DragDrop key={i} imgData={entry.images} setLastEdited={formatLastEditedDate}/>
            )}
          </PageLayout>
        </PrintWrapper>
      ))}
    </Wrapper>
  );
}