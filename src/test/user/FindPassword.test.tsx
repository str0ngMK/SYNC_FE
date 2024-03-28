import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';

test('FindPassword 컴포넌트에 이메일 입력란이 포함되어있다.', () => {
  // Act
  render(
    <MemoryRouter initialEntries={['/user/find/password']}>
      <App />
    </MemoryRouter>
  );

  // Assert
  const emailInput = screen.getByPlaceholderText('이메일');
  expect(emailInput).toBeInTheDocument();
});

test.each([
  {
    linkText: '비밀번호를 알고 있나요? 아이디 찾으러 가기',
    role: 'find-userid',
  },
  {
    linkText: '회원가입 하러 가기',
    role: 'signup',
  },
  {
    linkText: '로그인으로 돌아가기',
    role: 'login',
  },
])(
  'FindPassword 컴포넌트에 $linkText Link를 클릭하면 role이 $role인 페이지로 경로가 변경된다.',
  async ({ linkText, role }) => {
    // Act
    render(
      <MemoryRouter initialEntries={['/user/find/password']}>
        <App />
      </MemoryRouter>
    );

    const linkElement = screen.getByText(linkText);
    expect(linkElement).toBeInTheDocument();

    fireEvent.click(linkElement);
    const container = await screen.findByRole(role);
    expect(container).toBeVisible();
  }
);
