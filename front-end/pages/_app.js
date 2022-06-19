import { ContextProvider } from '../context';
import { GlobalStyle } from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <ContextProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ContextProvider>
  )
}

export default MyApp
