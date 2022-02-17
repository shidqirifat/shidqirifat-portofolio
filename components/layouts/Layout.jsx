/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Shidqi Rifat - Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icons/icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="font-inter bg-slate-50 dark:bg-slate-900 transition duration-700">
        <Header />
        <main className="mx-6">
          <div className="max-w-4xl mx-auto">{children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
}
