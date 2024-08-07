import React from 'react';
import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { MainRoutes } from '@routes';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
  box-sizing: border-box;
  }
  body {
    z-index: -1;
  }
  a{
    color: black;
    text-decoration: none;
  }
`;

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <CookiesProvider>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
