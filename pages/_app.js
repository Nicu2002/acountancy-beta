import '../styles/globals.css'
import {wrapper} from "../store";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
      <>
        <NextNProgress/>
        <Component {...pageProps} />
      </>
  )
}

export default wrapper.withRedux(MyApp);
