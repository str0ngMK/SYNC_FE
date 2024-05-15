import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LoginMain = styled.main`
  width: 1920px;
  height: 945px;
  background-color: #c6c6c6;
`;

const Container = styled.section`
  width: 1116px;
  height: 666px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  left: 271px;
  top: 124px;
`;

const LoginTitle = styled.h1`
  width: 476px;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: calc(355px - 271px);
  top: calc(162px - 124px);
  font-size: 96px;
  font-weight: 600;
  color: #863cff;
`;

const LoginBottom = styled.section`
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: space-between;
`;

const LoginBox = styled.article`
  width: 440px;
  height: 450px;
  background-color: white;
  border-top: 1px solid #e5e5e5;
  border-left: 1px solid #e5e5e5;
`;

const LoginTabMenu = styled.ul`
  height: 50px;
  border-bottom: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-around;
  align-items: center;
  li {
    font-size: 20px;
    color: #9d9d9d;
  }
`;

const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.div`
  width: 330px;
  height: 55px;
  input {
    width: 100%;
    height: 39px;
    margin-top: 30px;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    &::placeholder {
      font-size: 15px;
      color: #c6c6c6;
      position: absolute;
      left: 16px;
      top: 12px;
    }
  }
  span {
    width: 100%;
    height: 16px;
    font-size: 12px;
    color: #ff0c0c;
  }
`;

const Submit = styled.input`
  width: 330px;
  height: 40px;
  margin-top: 50px;
  background-color: #863cff;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  color: #e8e8e8;
  font-weight: 600;
  cursor: pointer;
`;

const Options = styled.div`
  width: 330px;
  height: 21px;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
`;

const AutoLogin = styled.div`
  width: 92px;
  height: 21px;
  span {
    font-size: 12px;
    font-weight: 200;
  }
`;

const FindAccount = styled.div`
  width: 158px;
  height: 21px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    font-size: 12px;
    color: #9d9d9d;
  }
`;

const JoinLink = styled.div`
  width: 330px;
  height: 40px;
  margin-top: 50px;
  background-color: #919191;
  border: none;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: #e8e8e8;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
  }
`;

const Footer = styled.footer`
  width: 100%;
  height: 145px;
`;

const DEFAULT_ERROR_MESSAGE = {
  userId: '',
  password: '',
};

export default function Login() {
  const [loginForm, setLoginForm] = useState({
    userId: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState({
    userId: '',
    password: '',
  });

  const handleLogin = async (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    const isValidatePass = validateLoginForm();
    if (!isValidatePass) return false;

    try {
      await axios.post('/login', { ...loginForm });
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        if (error.response.data.message === '아이디가 잘못되었습니다.')
          return setErrorMessage({
            ...errorMessage,
            userId: '아이디 또는 비밀번호가 옳지 않습니다.',
          });
      }
      console.error('네트워크 에러');
    }
  };

  const validateLoginForm = () => {
    const passwordRegExp = /(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\W)(?=\S+$).{8,16}/;

    const { userId, password } = loginForm;
    let loginErrorMessage = { ...DEFAULT_ERROR_MESSAGE };

    if (userId.length <= 7 || userId.length >= 17)
      loginErrorMessage = {
        ...loginErrorMessage,
        userId: '아이디는 8자 이상 ~ 16자 이하의 길이를 입력해야 합니다.',
      };
    if (!password.match(passwordRegExp))
      loginErrorMessage = {
        ...loginErrorMessage,
        password: '비밀번호가 정규식에 해당하지 않습니다.',
      };
    if (password.length <= 7 || password.length >= 17)
      loginErrorMessage = {
        ...loginErrorMessage,
        password: '비밀번호는 8자 이상 ~ 16자 이하의 길이를 입력해야 합니다.',
      };

    if (
      Object.entries(DEFAULT_ERROR_MESSAGE).toString() !==
      Object.entries(loginErrorMessage).toString()
    ) {
      setErrorMessage({ ...loginErrorMessage });
      return false;
    }
    setErrorMessage({ ...DEFAULT_ERROR_MESSAGE });
    return true;
  };

  return (
    <>
      <LoginMain role="login">
        <Container>
          <LoginTitle>Hinc</LoginTitle>
          <LoginBottom>
            <article>
              <img src={`${process.env.PUBLIC_URL}/assets/login.png`} alt="" />
            </article>
            <LoginBox>
              <LoginTabMenu>
                <li>계정 로그인</li>
                <li>간편 로그인</li>
              </LoginTabMenu>
              <LoginContent>
                <form>
                  <Input>
                    <input
                      type="text"
                      value={loginForm.userId}
                      onChange={(e) =>
                        setLoginForm({ ...loginForm, userId: e.target.value })
                      }
                      placeholder="아이디"
                    />
                    <span>{errorMessage.userId}</span>
                  </Input>

                  <Input>
                    <input
                      type="password"
                      value={loginForm.password}
                      onChange={(e) =>
                        setLoginForm({ ...loginForm, password: e.target.value })
                      }
                      placeholder="비밀번호"
                    />
                    <span>{errorMessage.password}</span>
                  </Input>

                  <Submit type="submit" value="로그인" onClick={handleLogin} />
                </form>
                <Options>
                  <AutoLogin>
                    <input type="checkbox" id="auto-login" />
                    <span>자동 로그인</span>
                  </AutoLogin>
                  <FindAccount>
                    <span>아이디 찾기</span>
                    <span>|</span>
                    <span>비밀번호 찾기</span>
                  </FindAccount>
                </Options>
                <JoinLink>
                  <Link to="/signup" role="link">
                    회원가입
                  </Link>
                </JoinLink>
              </LoginContent>
            </LoginBox>
          </LoginBottom>
        </Container>
      </LoginMain>
      <Footer></Footer>
    </>
  );
}
