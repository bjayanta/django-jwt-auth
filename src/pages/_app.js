import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from "react";
// import '../../styles/globals.css'

const App = ({ Component, pageProps }) => {
  // import bootstrap js file
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  // component
  return (
    <Component {...pageProps} />
  );
}

export default App
