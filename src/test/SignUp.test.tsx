import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';
import { User, signupAPI } from '../api';
import axios from 'axios';
import react, { useState } from 'react';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));
const setState = jest.fn();
const mockedReact = react as jest.Mocked<typeof react>;

test.skip.each([
  { input: '이름' },
  { input: '아이디' },
  { input: '비밀번호' },
  { input: '이메일' },
])('회원가입 컴포넌트에 $input 입력 요소가 작성되어있다.', ({ input }) => {
  // Act
  render(
    <MemoryRouter initialEntries={['/signup']}>
      <App />
    </MemoryRouter>
  );

  // Assert
  expect(screen.getByPlaceholderText(input)).toBeInTheDocument();
});

test.skip('회원가입 컴포넌트의 생년월일 입력 란이 작성되었고 readonly 속성이 포함되어있다.', () => {
  // Act
  render(
    <MemoryRouter initialEntries={['/signup']}>
      <App />
    </MemoryRouter>
  );

  // Assert
  const birthInput = screen.getByLabelText('생년월일');
  expect(birthInput).toHaveAttribute('readonly');
});

test.skip.each([{ gender: 'MAN' }, { gender: 'WOMAN' }, { gender: '기타' }])(
  '회원가입 컴포넌트의 성별 라디오 박스가 작성되었고 $gender 값이 포함되어있다.',
  ({ gender }) => {
    // Act
    render(
      <MemoryRouter initialEntries={['/signup']}>
        <App />
      </MemoryRouter>
    );

    // Assert
    const genderValue = screen.getByDisplayValue(gender);
    expect(genderValue).toBeInTheDocument();
  }
);

describe.skip('회원 Form Validation 테스트', () => {
  const validateSignUpForm = ({
    userId,
    password,
    email,
    username,
    sex,
  }: User) => {
    const passwordRegExp = /(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\W)(?=\S+$).{8,16}/;
    const emailRegExp = /[a-z0-9]+@[a-z0-9]+.[a-z]{3,4}/;

    if (!userId)
      return {
        isPass: false,
        focus: 'userId',
        message: '아이디는 필수 입력 요소입니다.',
      };
    if (userId.length <= 7 || userId.length >= 17)
      return {
        isPass: false,
        focus: 'userId',
        message: '아이디는 8자 이상 ~ 16자 이하의 길이를 입력해야 합니다.',
      };
    if (!password)
      return {
        isPass: false,
        focus: 'password',
        message: '비밀번호는 필수 입력 요소입니다.',
      };
    if (!password.match(passwordRegExp))
      return {
        isPass: false,
        focus: 'password',
        message: '비밀번호가 정규식에 해당하지 않습니다.',
      };
    if (password.length <= 7 || password.length >= 17)
      return {
        isPass: false,
        focus: 'password',
        message: '비밀번호는 8자 이상 ~ 16자 이하의 길이를 입력해야 합니다.',
      };
    if (!email)
      return {
        isPass: false,
        focus: 'email',
        message: '이메일은 필수 입력 요소입니다.',
      };
    if (!email.match(emailRegExp))
      return {
        isPass: false,
        focus: 'email',
        message: '이메일이 정규식을 통과하지 못했습니다.',
      };
    if (!username)
      return {
        isPass: false,
        focus: 'username',
        message: '이름은 필수 입력 요소입니다.',
      };
  };

  const correctForm: User = {
    userId: 'helloWorld',
    password: 'thisispassword',
    email: 'example@gmail.com',
    username: 'textcase',
    sex: 'MAN',
  };

  test('userId의 길이가 18자일때 회원 Form 검증이 되지 않는다.', () => {
    // Arrange
    const userId = Math.random().toString(36).substring(2, 20);

    // Act
    const validationResponse = validateSignUpForm({ ...correctForm, userId });

    // Assertion
    expect(validationResponse?.isPass).toBeFalsy();
  });

  test('password의 길이가 20자일때 회원 Form 검증이 되지 않는다', () => {
    // Arrange
    const password = Math.random().toString(36).substring(2, 22);

    // Act
    const validationResponse = validateSignUpForm({ ...correctForm, password });

    // Assert
    expect(validationResponse?.isPass).toBeFalsy();
  });

  test('password가 1^5B@36A2일때 비밀번호 정규식을 통과하지 않는다.', () => {
    // Arrange
    const password = '1^5B@36A2';

    // Act
    const validationResponse = validateSignUpForm({ ...correctForm, password });

    // Assert
    expect(validationResponse?.isPass).toBeFalsy();
  });

  test('email이 test^11@gmail.com일때 이메일 정규식을 통과하지 않는다.', () => {
    // Arrange
    const email = 'test^11@gmail.com';

    // Act
    const validationResponse = validateSignUpForm({ ...correctForm, email });

    // Assert
    expect(validationResponse?.isPass).toBeFalsy();
  });
});

describe('<SignUp /> 상태 변화', () => {
  beforeEach(() => {
    //@ts-ignore
    mockedReact.useState.mockImplementation((init: any) => [init, setState]);
  });

  test('기본 상태 테스트', () => {
    render(
      <MemoryRouter initialEntries={['/signup']}>
        <App />
      </MemoryRouter>
    );

    const userIdInput = screen.getByPlaceholderText('아이디');
    expect(userIdInput).toHaveValue('');

    const passwordInput = screen.getByPlaceholderText('비밀번호');
    expect(passwordInput).toHaveValue('');

    const emailInput = screen.getByPlaceholderText('이메일');
    expect(emailInput).toHaveValue('');

    const usernameInput = screen.getByPlaceholderText('이름');
    expect(usernameInput).toHaveValue('');

    const nicknameInput = screen.getByPlaceholderText('닉네임');
    expect(nicknameInput).toHaveValue('');

    const manRadioBox = screen.getByDisplayValue('MAN');
    expect(manRadioBox).toHaveProperty('checked', true);

    const cityInput = screen.getByPlaceholderText('도시');
    expect(cityInput).toHaveValue('');

    const districtInput = screen.getByPlaceholderText('구역');
    expect(districtInput).toHaveValue('');

    const roadAddressInput = screen.getByPlaceholderText('도시');
    expect(roadAddressInput).toHaveValue('');
  });
});

test.skip('signup API 통신이 성공했을 때 OK 메세지를 응답한다.', async () => {
  // Arrange
  const correctForm: User = {
    userId: 'hellofront2',
    password: '@password12',
    email: 'example@gmail.com',
    username: 'textcase',
    sex: 'MAN',
  };
  render(
    <MemoryRouter initialEntries={['/signup']}>
      <App />
    </MemoryRouter>
  );

  // Act
  const mockResolvedValue = {
    data: 'OK',
  };

  mockedAxios.post.mockResolvedValueOnce(mockResolvedValue);

  const response = await signupAPI(correctForm);

  // Assert
  expect(axios.post).toHaveBeenCalledWith(`/signup`, {
    userId: correctForm.userId,
    password: correctForm.password,
    email: correctForm.email,
    username: correctForm.username,
    sex: correctForm.sex,
  });

  expect(response).toBe(mockResolvedValue);
});

test.skip('signup API 통신이 실패했을 때 undefined를 응답한다.', async () => {
  // Arrange
  render(
    <MemoryRouter initialEntries={['/signup']}>
      <App />
    </MemoryRouter>
  );

  // Act
  mockedAxios.post.mockImplementation(() =>
    Promise.reject('아이디는 필수 입력 값입니다.')
  );

  const response = await signupAPI({
    userId: 'short',
    password: '@12341234a',
    email: 'example@gmail.com',
    username: 'testname',
    sex: 'MAN',
  });

  expect(mockedAxios.post).toHaveBeenCalledWith(`/signup`, {
    userId: 'short',
    password: '@12341234a',
    email: 'example@gmail.com',
    username: 'testname',
    sex: 'MAN',
  });
  expect(response).toBe('아이디는 필수 입력 값입니다.');
});
