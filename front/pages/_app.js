import "../styles/App.css";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>To-do List</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
