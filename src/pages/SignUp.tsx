import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import passwordIcon from '@assets/lock-01.svg';
import mail from '@assets/mail-01.svg';
import { User } from '@services/api';
import { AxiosError } from 'axios';
import styled from 'styled-components';

const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.section`
  width: 590px;
  padding: 50px 50px;
  border-radius: 12px;
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 10);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  width: 100%;
  margin-bottom: 20px;
  color: #1f2937;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  width: 100%;
  margin-bottom: 8px;
  color: #a6b3be;
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 54px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  position: relative;
`;

const InputIcon = styled.img`
  position: absolute;
  left: 16px;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 48px;
  border-radius: 4px;
  border: 1px solid var(--input-stroke, #d2dbe2);
  &::placeholder {
    font-size: 14px;
  }
`;

const Submit = styled.input`
  width: 100%;
  height: 56px;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    #d2d2d2;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DEFAULT_ERROR_MESSAGE = {
  userId: '',
  password: '',
  username: '',
};

export default function SignUp() {
  const [signupForm, setSignupForm] = useState<User>({
    userId: '',
    password: '',
    username: '',
  });
  const [errorMessage, setErrorMessage] = useState<User>({
    userId: '',
    password: '',
    username: '',
  });

  const navigate = useNavigate();

  const validateSignUpForm = () => {
    const passwordRegExp = /(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\W)(?=\S+$).{8,16}/;
    const emailRegExp = /[a-z0-9]+@[a-z0-9]+.[a-z]{3,4}/;

    const { userId, password, username } = signupForm;
    let signupErrorMessage = { ...DEFAULT_ERROR_MESSAGE };

    if (!password.match(passwordRegExp))
      signupErrorMessage = {
        ...signupErrorMessage,
        password: '비밀번호가 정규식에 해당하지 않습니다.',
      };
    if (password.length <= 7 || password.length >= 17)
      signupErrorMessage = {
        ...signupErrorMessage,
        password: '비밀번호는 8자 이상 ~ 16자 이하의 길이를 입력해야 합니다.',
      };
    if (!userId.match(emailRegExp))
      signupErrorMessage = {
        ...signupErrorMessage,
        userId: '이메일이 정규식을 통과하지 못했습니다.',
      };
    if (!username) {
      signupErrorMessage = {
        ...signupErrorMessage,
        username: '이름은 필수 입력 요소입니다.',
      };
    }
    if (
      Object.entries(DEFAULT_ERROR_MESSAGE).toString() !==
      Object.entries(signupErrorMessage).toString()
    ) {
      setErrorMessage({ ...signupErrorMessage });
      return false;
    }
    setErrorMessage({ ...DEFAULT_ERROR_MESSAGE });
    return true;
  };

  // todo return 값이 통일 되야아함
  // eslint-disable-next-line consistent-return
  const handleSignUp = async (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    const isValidatePass = validateSignUpForm();
    if (!isValidatePass) return false;

    try {
      // const response = await axios.post('https://158.247.197.212:9090/signup', {
      //   email: 'example2@gmail.com',
      //   ...signupForm,
      // });
      window.alert('회원가입이 완료되었습니다.');
      navigate('/login');
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        if (error.response.data.message === 'UserId is duplicated')
          return setErrorMessage({
            ...errorMessage,
            userId: '입력된 이메일은 이미 가입된 상태입니다.',
          });
      }
      console.error(error);
    }
  };

  return (
    <Main>
      <Wrapper>
        <Title>회원가입</Title>
        <Form>
          <Label>{`이메일[필수]`}</Label>
          <InputWrapper>
            <InputIcon src={mail} />
            <Input
              type="text"
              value={signupForm.userId}
              onChange={(e) =>
                setSignupForm({ ...signupForm, userId: e.target.value })
              }
              placeholder="이메일을 입력해주세요."
            />
          </InputWrapper>

          <Label>{`비밀번호[필수]`}</Label>
          <InputWrapper>
            <InputIcon src={passwordIcon} />
            <Input
              type="password"
              value={signupForm.password}
              onChange={(e) =>
                setSignupForm({ ...signupForm, password: e.target.value })
              }
              placeholder="비밀번호를 입력해주세요"
            />
          </InputWrapper>

          <Label>{`이름(닉네임)[필수]`}</Label>
          <InputWrapper>
            <Input
              type="text"
              value={signupForm.username}
              onChange={(e) =>
                setSignupForm({ ...signupForm, username: e.target.value })
              }
              placeholder="이메일 입력"
            />
          </InputWrapper>

          <Submit type="submit" value="인증요청" onClick={handleSignUp} />
        </Form>
      </Wrapper>
    </Main>
  );
}
