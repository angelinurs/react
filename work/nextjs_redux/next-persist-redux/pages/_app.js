import { Provider, useStore } from 'react-redux';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const store = useStore((state) => state );
  return (
    <Provider store={store}>
      <Component {...pageProps} />

    </Provider>
  );

}

export default MyApp
