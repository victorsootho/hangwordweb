import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Hangword from "./components/Hangword";

const Home: NextPage = () => {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/solutions")
      .then((res) => res.json())
      .then((json) => {
        //   generate random int between 0 and 14
        const randomSolution = json[Math.floor(Math.random() * json.length)];
        setSolution(randomSolution.word);
      });
  }, [setSolution]);
  return (
    <div className="App flex min-h-screen flex-col items-center py-2">
      <Head>
        <title>HangWord</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center text-center">
        <div>
          <nav>
            <h1 className="text-xl font-semibold">HangWords</h1>
          </nav>
          {solution && <Hangword solution={solution} />}
        </div>
      </main>
    </div>
  );
};

export default Home;
