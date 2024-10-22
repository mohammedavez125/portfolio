import Theme from "../styles/theme";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <Theme>
          <Component {...pageProps} />
        </Theme>
      ) : (
        "deer"
      )}
    </>
  );
}
