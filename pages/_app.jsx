import "../styles/globals.css";
import Layout from "../components/layouts/Layout";
import { ThemeProvider } from "next-themes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 160,
    });
  });

  return (
    <ThemeProvider enableSystem attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
