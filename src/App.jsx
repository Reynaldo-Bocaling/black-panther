import React, { useEffect, useState } from "react";
import Hero from "./view/Hero";
import About from "./view/About";
import Tokenomics from "./view/Tokenomics";
import Contact from "./view/Contact";
import Footer from "./components/Footer";
import SlidingText from "./components/SlidingText";
import Loading from "./components/Loading";
import Intro from "./components/Intro";

const App = () => {
  const [start, setStart] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let timer;

    if (start) {
      timer = setTimeout(() => setIsLoading(false), 5000);
    } else {
      setIsLoading(true);
    }

    return () => clearTimeout(timer);
  }, [start]);

  return (
    <main className="w-full overflow-hidden">
      {start ? (
        <Main isLoading={isLoading} />
      ) : (
        <Intro onStart={() => setStart(true)} />
      )}
    </main>
  );
};

const Main = ({ isLoading }) => (
  <>
    {isLoading ? (
      <Loading />
    ) : (
      <div className="duration-300 transition-all ease-in-out">
        <SlidingText />
        <Hero />
        <About />
        <Tokenomics />
        <Footer />
      </div>
    )}
  </>
);

export default App;
