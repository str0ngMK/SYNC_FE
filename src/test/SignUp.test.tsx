import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test.each([
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

test('회원가입 컴포넌트의 생년월일 입력 란이 작성되었고 readonly 속성이 포함되어있다.', () => {
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

test.each([{ gender: '남성' }, { gender: '여성' }, { gender: '기타' }])(
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
