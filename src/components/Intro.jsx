const Intro = ({ onStart }) => (
  <div className="relative h-screen w-screen flex items-center justify-center">
    <button
      className="blink title text-2xl font-bold text-white z-[999]"
      onClick={onStart}
    >
      Explore Now
    </button>
    <img
      src="/img/tokenomics.jpeg"
      alt="Hellcat"
      className="w-full absolute top-10 left-0 opacity-[0.3]"
    />
  </div>
);

export default Intro;
