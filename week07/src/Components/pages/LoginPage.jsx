import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;

  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  max-width: 500px;
  padding: 0 20px;

  left: 35%;
  trasform: translate(-50%, 0);

  overflow: hidden;
  z-index: -999;
`;
const TitleWrap = styled.div`
  margin-top: 130px;
  font-size: 30px;
  font-weight: bold;
`;
const ContentWrap = styled.div`
  margin-top: 30px;
`;
const EmailText = styled.div`
  font-size: 15px;
  font-weight: bold;
`;
const PasswordText = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

const EmailInput = styled.input`
  display: flex;
  border-radius: 10px;
  border: 1px solid #e2e0e0;
  padding: 18px;
  margin-top: 8px;
  background-color: white;
  width: 460px;

  &:focus-within {
    border: 1px solid purple;
    outline: none;
  }
  &::placeholder {
    color: #dadada;
  }
`;
const PasswordInput = styled.input`
  display: flex;
  border-radius: 10px;
  border: 1px solid #e2e0e0;
  padding: 18px;
  margin-top: 8px;
  background-color: white;
  width: 460px;

  &:focus-within {
    border: 1px solid purple;
    outline: none;
  }
  &::placeholder {
    color: #dadada;
  }
`;
const EmailError = styled.div`
  margin-top: 8px;
  font-size: 12px;
  color: red;
`;
const PasswordError = styled.div`
  margin-top: 8px;
  font-size: 12px;
  color: red;
`;

const PasswordWrap = styled.div`
  margin-top: 30px;
`;
const OkButton = styled.button`
  border-radius: 20px;
  height: 50px;
  border: none;
  color: white;
  font-size: 20px;
  font-weight: bold;
  background-color: #d3d3d3;
  margin-top: 20px;
  cursor: pointer;

  &:disabled {
    background-color: #002545;
  }
`;
export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(email)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handlePw = (e) => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(pw)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  useEffect(
    () => {
      if (emailValid && pwValid) {
        setNotAllow(false);
        return;
      }
    },
    { emailValid, pwValid },
  );

  return (
    <div className="page-container">
      <LoginWrap>
        <TitleWrap>이메일과 비밀번호를 입력해주세요</TitleWrap>
        <ContentWrap>
          <div>
            <EmailText>이메일 주소</EmailText>
            <div>
              <EmailInput
                type="email"
                placeholder="test@gmail.com"
                value={email}
                onChange={handleEmail}
              />
            </div>
            <div>
              {!emailValid && email.length > 0 && (
                <EmailError>올바른 이메일을 입력해주세요</EmailError>
              )}
            </div>
          </div>
          <PasswordWrap>
            <PasswordText>비밀번호</PasswordText>
            <div>
              <PasswordInput
                type="password"
                placeholder="영문, 숫자, 특수문자 포함 8자 이상 입력해주세요"
                value={pw}
                onChange={handlePw}
              />
            </div>
            <div>
              {!pwValid && pw.length > 0 && (
                <PasswordError>
                  영문, 숫자, 특수문자 포함 8자 이상 입력해주세요
                </PasswordError>
              )}
            </div>
          </PasswordWrap>
        </ContentWrap>
        <OkButton disabled={notAllow}>확인</OkButton>
      </LoginWrap>
    </div>
  );
}
