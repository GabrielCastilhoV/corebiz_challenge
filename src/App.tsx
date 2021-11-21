import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyles from './styles/global';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { ToastContainer, Flip } from 'react-toastify';
import { Home } from './pages/Home';

const App: React.FC = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <ToastContainer transition={Flip} limit={1} />
      <GlobalStyles />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
