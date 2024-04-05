import axios, { AxiosError } from 'axios';
import { User, signupAPI } from '../api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DEFAULT_ERROR_MESSAGE = {
  userId: '',
  password: '',
  email: '',
  username: '',
};

export default function SignUp() {
  const [signupForm, setSignupForm] = useState<User>({
    userId: '',
    password: '',
    email: '',
    username: '',
    sex: 'MAN',
    nickname: '',
    city: '',
    district: '',
    roadAddress: '',
  });
  const [errorMessage, setErrorMessage] = useState<Omit<User, 'sex'>>({
    userId: '',
    password: '',
    email: '',
    username: '',
    nickname: '',
    city: '',
    district: '',
    roadAddress: '',
  });

  const navigate = useNavigate();

  const onchangeSexRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedSex = e.target.value as 'MAN' | 'WOMAN';
    setSignupForm({ ...signupForm, sex: selectedSex });
  };

  const handleSignUp = async (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    const isValidatePass = validateSignUpForm();
    if (!isValidatePass) return false;

    try {
      await axios.post('/signup', { ...signupForm });
      window.alert('회원가입이 완료되었습니다.');
      navigate('/login');
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        if (error.response.data.message === 'UserId is duplicated')
          return setErrorMessage({
            ...errorMessage,
            userId: '입력된 아이디는 이미 가입된 상태입니다.',
          });
      }
      console.error('네트워크 에러');
    }
  };

  const validateSignUpForm = () => {
    const passwordRegExp = /(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\W)(?=\S+$).{8,16}/;
    const emailRegExp = /[a-z0-9]+@[a-z0-9]+.[a-z]{3,4}/;

    const { userId, password, email, username } = signupForm;
    let signupErrorMessage = { ...DEFAULT_ERROR_MESSAGE };

    if (userId.length <= 7 || userId.length >= 17)
      signupErrorMessage = {
        ...signupErrorMessage,
        userId: '아이디는 8자 이상 ~ 16자 이하의 길이를 입력해야 합니다.',
      };
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
    if (!email.match(emailRegExp))
      signupErrorMessage = {
        ...signupErrorMessage,
        email: '이메일이 정규식을 통과하지 못했습니다.',
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

  return (
    <>
      <header>
        <h1>Hinc</h1>
      </header>
      <main role="signup">
        <section>
          <article>
            <form>
              <div>
                <input
                  type="text"
                  value={signupForm.userId}
                  onChange={(e) =>
                    setSignupForm({ ...signupForm, userId: e.target.value })
                  }
                  placeholder="아이디"
                />
                <button>중복 검사</button>
              </div>
              <span>{errorMessage.userId}</span>

              <div>
                <input
                  type="password"
                  value={signupForm.password}
                  onChange={(e) =>
                    setSignupForm({ ...signupForm, password: e.target.value })
                  }
                  placeholder="비밀번호"
                />
                <p>눈 아이콘</p>
              </div>
              <span>{errorMessage.password}</span>

              <div>
                <label htmlFor="email">이메일</label>
                <div>
                  <input
                    type="text"
                    value={signupForm.email}
                    onChange={(e) =>
                      setSignupForm({ ...signupForm, email: e.target.value })
                    }
                    placeholder="이메일"
                  />
                  <button role="email-auth">전송</button>
                </div>
              </div>
              <span>{errorMessage.email}</span>

              <input
                type="text"
                value={signupForm.username}
                onChange={(e) =>
                  setSignupForm({ ...signupForm, username: e.target.value })
                }
                placeholder="이름"
              />
              <span>{errorMessage.username}</span>

              <input
                type="text"
                value={signupForm.nickname}
                onChange={(e) =>
                  setSignupForm({ ...signupForm, nickname: e.target.value })
                }
                placeholder="닉네임"
              />
              <span>{errorMessage.nickname}</span>

              <div>
                <label htmlFor="birth">
                  <span>생년월일</span>
                  <input id="birth" type="text" readOnly />
                </label>
              </div>
              <div>
                <label htmlFor="gender">성별</label>
                <ul>
                  <li>
                    남성
                    <input
                      type="radio"
                      name="gender"
                      value="MAN"
                      checked={signupForm.sex === 'MAN'}
                      onChange={onchangeSexRadio}
                    />
                  </li>
                  <li>
                    여성
                    <input
                      type="radio"
                      name="gender"
                      value="WOMAN"
                      checked={signupForm.sex === 'WOMAN'}
                      onChange={onchangeSexRadio}
                    />
                  </li>
                </ul>
                <input
                  type="text"
                  value={signupForm.city}
                  onChange={(e) =>
                    setSignupForm({ ...signupForm, city: e.target.value })
                  }
                  placeholder="도시"
                />
                <input
                  type="text"
                  value={signupForm.district}
                  onChange={(e) =>
                    setSignupForm({ ...signupForm, district: e.target.value })
                  }
                  placeholder="구역"
                />
                <input
                  type="text"
                  value={signupForm.roadAddress}
                  onChange={(e) =>
                    setSignupForm({
                      ...signupForm,
                      roadAddress: e.target.value,
                    })
                  }
                  placeholder="도로명 주소"
                />
              </div>
              <p>
                가입하기 버튼을 클릭하면 takebook의 약관, 개인정보처리방침 및
                쿠키 정책에 동의하게 됩니다. takebook으로부터 SNS 알림을 받을 수
                있으며 알림은 언제든지 수신 거부할 수 있습니다.
              </p>
              <input type="submit" value="가입하기" onClick={handleSignUp} />
            </form>
          </article>
        </section>
      </main>
    </>
  );
}
