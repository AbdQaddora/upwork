import React from 'react';
import GlobalStyle from 'style/GlobalStyle';
import { defaultTheme } from 'style/Theme';

// providers
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <div className="App">
        HELLO WORLD
      </div>
    </ThemeProvider>
  );
}

export default App;
