import Footer from '../src/component/Footer'
import Header from '../src/component/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}

export default MyApp
