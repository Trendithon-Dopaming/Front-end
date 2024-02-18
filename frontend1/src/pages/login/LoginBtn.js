import styled from "styled-components";
import { useState, useEffect } from "react";

const Btn = styled.button`
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 600px;
  height: 60px;
  flex-shrink: 0;
  padding: 15px 0;
  border-radius: 71px;
  background: #fff;
  border: none;
  text-align: center;
  color: #000;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: center;
`;

const LoginBtn = () => {
  return (
    <BtnBox>
      <Btn>로그인하기</Btn>
    </BtnBox>
  );
};

export default LoginBtn;
