import React, { Fragment } from "react";
import normalize from "normalize.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Component {...pageProps} />
      <style jsx global>
        {normalize}
      </style>
    </Fragment>
  );
}

export default MyApp;
