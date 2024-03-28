import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { MemoryRouter, Navigate, Route, Routes } from 'react-router-dom';

test('로그인 중일떼 Home 컴포넌트로 이동한다.', () => {
  // Arrange
  const isLogin = true;

  // Act
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  // Assert
  expect(screen.getByRole('home')).toBeInTheDocument();
});

test.skip.each([
  { path: '/', routeInfoText: '메인 페이지' },
  { path: '/login', routeInfoText: '로그인 페이지' },
  { path: '/signup', routeInfoText: '회원가입 페이지' },
  { path: '/1/modify', routeInfoText: '프로필 편집 페이지' },
  { path: '/1/create', routeInfoText: '경로 404 에러' },
])(
  '$path 경로로 이동하면 $routeInfoText 텍스트가 출력된다.',
  ({ path, routeInfoText }) => {
    // Act
    render(
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(routeInfoText)).toBeInTheDocument();
  }
);
