import React from 'react';

// Theme
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'style/GlobalStyle';
import { defaultTheme } from 'style/Theme';

// router
import Router from 'router';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
