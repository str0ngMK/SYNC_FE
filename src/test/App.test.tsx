import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { MemoryRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from '../router/Home';
import Login from '../router/Login';
import SignUp from '../router/SignUp';
import ModifyUser from '../router/user/Modify';

test('로그인 중이 아닐때 Home 컴포넌트로 이동하는가?', () => {
  // Arrange
  const isLogin = true;

  // Act
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  // Assert
  expect(screen.getByText('메인 페이지')).toBeInTheDocument();
});

test.each([
  { path: '/', routeInfoText: '메인 페이지' },
  { path: '/login', routeInfoText: '로그인 페이지' },
  { path: '/signup', routeInfoText: '회원가입 페이지' },
  { path: '/1/modify', routeInfoText: '프로필 편집 페이지' },
  { path: '/1/create', routeInfoText: '경로 404 에러' },
])('%s 경로로 이동하면 %s 텍스트가 출력되는가?', ({ path, routeInfoText }) => {
  // Act
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );

  expect(screen.getByText(routeInfoText)).toBeInTheDocument();
});
