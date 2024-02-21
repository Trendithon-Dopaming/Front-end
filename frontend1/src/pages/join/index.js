import styled from "styled-components";
import Join from "./Join";

const JoinSection = styled.div`
  margin: 0 auto 0;
  padding: 100px;
  min-height: 1080px;
  background-color: black;
  color: #fff;
`;

const JoinSec = () => {
  return (
    <JoinSection>
      <Join />
    </JoinSection>
  );
};

export default JoinSec;
