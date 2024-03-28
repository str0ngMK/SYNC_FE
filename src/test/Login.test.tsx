import { fireEvent, render, screen } from '@testing-library/react';
import Login from '../router/Login';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

test.each([{ input: '아이디' }, { input: '비밀번호' }])(
  '로그인 컴포넌트에 $input 입력 요소가 작성되어있다.',
  ({ input }) => {
    // Act
    render(
      <MemoryRouter initialEntries={['/login']}>
        <App />
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByPlaceholderText(input)).toBeInTheDocument();
  }
);

test('회원가입 링크를 클릭하면 회원가입 페이지로 경로가 변경된다.', () => {
  // Act
  render(
    <MemoryRouter initialEntries={['/login']}>
      <App />
    </MemoryRouter>
  );

  // Assert
  const linkElement = screen.getByRole('link');
  expect(linkElement).toHaveTextContent('회원가입');

  fireEvent.click(linkElement);
  const signUpContainer = screen.getByRole('signup');
  expect(signUpContainer).toBeInTheDocument();
});
