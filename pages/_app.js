// import { useRouter } from "next/router";
// import { useEffect } from "react";
// import NProgress from "nprogress";
import { ThemeProvider } from "next-themes";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  /* 
  const router = useRouter();

  NProgress.configure({
    easing: "facility ",
    speed: 400,
    trickleSpeed: 4,
    showSpinner: false,
    trickleRate: 0.02,
  });

  useEffect(() => {
    router.events.on("routeChangeStart", NProgress.start());
    router.events.on("routeChangeComplete", () => {
      NProgress.done();
    });
    router.events.on("routeChangeError", () => NProgress.done());
  }, []);
  */

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp;
