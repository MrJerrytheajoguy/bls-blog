import '../styles/globals.css'
import "react-mde/lib/styles/css/react-mde-all.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(
  fab,
);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
