import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <main role="login">
      <section>
        <h1>Hinc</h1>
      </section>
      <section>
        <article>
          <img src="" alt="" />
        </article>
        <article>
          <ul>
            <li>계정 로그인</li>
            <li>간편 로그인</li>
          </ul>
          <div>
            <form>
              <input
                type="text"
                value={loginForm.userId}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, userId: e.target.value })
                }
                placeholder="아이디"
              />
              <span>{errorMessage.userId}</span>

              <input
                type="password"
                value={loginForm.password}
                onChange={(e) =>
                  setLoginForm({ ...loginForm, password: e.target.value })
                }
                placeholder="비밀번호"
              />
              <span>{errorMessage.password}</span>

              <input type="submit" value="로그인" onClick={handleLogin} />
            </form>
            <div>
              <div>
                <input type="checkbox" />
                <span>자동 로그인</span>
              </div>
              <div>
                <span>아이디 찾기</span>
                <span>|</span>
                <span>비밀번호 찾기</span>
              </div>
            </div>
            <div>
              <Link to="/signup" role="link">
                회원가입
              </Link>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
