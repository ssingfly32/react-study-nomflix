import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import GlobalStyle from './style';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Outlet />
    </ThemeProvider>
    
  );
}
