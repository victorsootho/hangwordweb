import type { NextPage } from "next";
import Head from "next/head";
import Hangword from "./components/Hangword";
const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center py-2">
      <Head>
        <title>HangWord</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center text-center">
        <Hangword />
      </main>
    </div>
  );
};

export default Home;
