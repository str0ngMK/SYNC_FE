import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App';

test('FindId 컴포넌트에 이메일 입력란이 포함되어있다.', () => {
  // Act
  render(
    <MemoryRouter initialEntries={['/user/find/userId']}>
      <App />
    </MemoryRouter>
  );

  // Assert
  const emailInput = screen.getByPlaceholderText('이메일');
  expect(emailInput).toBeInTheDocument();
});

test.each([
  {
    linkText: '아이디를 알고 있나요? 비밀번호 찾으러 가기',
    role: 'find-password',
  },
  { linkText: '회원가입 하러 가기', role: 'signup' },
  { linkText: '로그인으로 돌아가기', role: 'login' },
])(
  'FindId 컴포넌트에 $linkText Link를 클릭하면 role이 $role인 페이지로 경로가 변경된다.',
  async ({ linkText, role }) => {
    // Act
    render(
      <MemoryRouter initialEntries={['/user/find/userId']}>
        <App />
      </MemoryRouter>
    );

    //Assert
    const linkElement = screen.getByText(linkText, { exact: false });
    expect(linkElement).toBeInTheDocument();

    fireEvent.click(linkElement);
    const container = await screen.findByRole(role);
    expect(container).toBeVisible();
  }
);
