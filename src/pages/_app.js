import { Provider } from 'react-redux';
import { useStore } from '../store';

import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from "react";

// import '../../styles/globals.css'

const App = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);

  // import bootstrap js file
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  // component
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App
