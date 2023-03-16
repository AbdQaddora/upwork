import React from 'react';

// Theme
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/GlobalStyle';
import { defaultTheme } from './style/Theme';

// router
import Router from './router';
import { Provider } from 'react-redux';
// redux
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
