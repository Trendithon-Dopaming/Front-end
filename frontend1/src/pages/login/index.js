import styled from "styled-components";
import Login from "./Login";

const LoginSection = styled.div`
  margin: 0 auto 0;
  padding: 100px; // 헤더 푸터 연결 이후 수정 필요
  min-height: 1080px;
  background-color: black;
  color: #fff;
`;

const LoginSec = () => {
  return (
    <LoginSection>
      <Login />
    </LoginSection>
  );
};

export default LoginSec;
