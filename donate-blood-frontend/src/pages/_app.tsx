import '../styles/global.css'
//import '../components/Navbar/styles.css'
//import { Theme } from '@twilio-paste/core/theme'
import { DasboardAppProvider } from "../context/contextDasboard";
function MyApp({ Component, pageProps }) {
  return (
    // <Theme.Provider theme="default">
    <DasboardAppProvider>

      <Component {...pageProps} />
    </DasboardAppProvider>
    // {/* </Theme.Provider> */}
  )
}

export default MyApp
