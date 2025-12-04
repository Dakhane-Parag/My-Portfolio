import { useState, useRef } from "react";
import { motion } from "motion/react";

function Navigation() {
  return (
    <ul className="nav-ul flex gap-6">
      <li className="nav-li"><a className="nav-link" href="#home">Home</a></li>
      <li className="nav-li"><a className="nav-link" href="#about">About</a></li>
      <li className="nav-li"><a className="nav-link" href="#work">Work</a></li>
      <li className="nav-li"><a className="nav-link" href="#contact">Contact</a></li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef(null);

 const toggleMusic = async () => {
  const audio = audioRef.current;

  try {
    if (!musicOn) {
      await audio.play(); 
    } else {
      audio.pause();
    }

    setMusicOn(!musicOn);
  } catch (err) {
    console.log("Audio play error:", err);
  }
};


  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">

      {/* Hidden audio file */}
      <audio ref={audioRef} loop>
        <source src="/space.mp3" type="audio/mp3" />
      </audio>

      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">

          <a
            href="/"
            className="text-xl font-bold text-neutral-400 hover:text-white"
          >
            Parag
          </a>

          {/* CENTER NAV (desktop) */}
          <nav className="hidden sm:flex justify-center flex-1">
            <Navigation />
          </nav>

          <div className="hidden sm:flex items-center">
            <div
              onClick={toggleMusic}
              className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-all
                ${musicOn ? "bg-primary" : "bg-neutral-700/60"}
              `}
            >
              <div
                className={`w-5 h-5 rounded-full shadow-md transform transition-all flex items-center justify-center text-xs
                  ${musicOn
                    ? "translate-x-7 bg-white text-primary"
                    : "translate-x-0 bg-neutral-300 text-neutral-800"}
                `}
              >
                {musicOn ? "🎵" : "🔇"}
              </div>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden ml-3 text-neutral-400 hover:text-white"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-6 h-6"
              alt="menu toggle"
            />
          </button>
        </div>
      </div>

      {/* MOBILE NAV */}
      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <nav className="pb-4">
            <Navigation />
          </nav>

          {/* MOBILE MUSIC TOGGLE */}
          <div className="flex justify-center mb-4">
            <div
              onClick={toggleMusic}
              className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition-all
                ${musicOn ? "bg-primary" : "bg-neutral-700/60"}
              `}
            >
              <div
                className={`w-5 h-5 rounded-full shadow-md transform transition-all flex items-center justify-center text-xs
                  ${musicOn
                    ? "translate-x-7 bg-white text-primary"
                    : "translate-x-0 bg-neutral-300 text-neutral-800"}
                `}
              >
                {musicOn ? "🎵" : "🔇"}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
