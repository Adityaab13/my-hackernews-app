import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import type { AppProps } from 'next/app';
import { Provider } from 'mobx-react';
import { newsStore } from '../stores/newsStore';
import theme from '../styles/theme';
import ErrorBoundary from '../components/ErrorBoundary';


// MyApp component that wraps all pages with global providers and styles
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider newsStore={newsStore}> {/* Provide the MobX store to the component tree */}
      <ThemeProvider theme={theme}> {/* Provide the custom Material-UI theme */}
        <CssBaseline /> {/* Apply baseline CSS to the application */}
        <ErrorBoundary> {/* Wrap the application in an ErrorBoundary to catch errors */}
          {/* Render the current page */}
          <Component {...pageProps} />
        </ErrorBoundary>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
