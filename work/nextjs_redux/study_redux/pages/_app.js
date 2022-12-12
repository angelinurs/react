import wrapper from '../lib/store/configureStore'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// 생성한 wrapper 를 
// wrapper.withRedux 를 이용해서 App을 감싸준다.
export default wrapper.withRedux(MyApp)
