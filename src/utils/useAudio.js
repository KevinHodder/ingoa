import { useRef, useState, useContext, createContext } from "react";

const AudioContext = createContext("./001.mp3");

const AudioProvider = ({ children }) => {
  const audio = useRef(new Audio("./001.mp3"));
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentlyPlaying, setCurrentlyPlaying] = useState("");

  const play = ({ track = "001.mp3", id = "", start = 0, end }) => {
    if (audio.current) {
      audio.current.src = `./${track}`;
      // handle "already playing"
      audio.current.pause();
      clearInterval(audio.current.int);
      // start new play
      setCurrentlyPlaying(id);
      audio.current.currentTime = start;
      if (end) {
        // handle case of play all
        audio.current.int = setInterval(() => {
          if (audio.current.currentTime > end) {
            audio.current.pause();
            setIsPlaying(false);
            clearInterval(audio.current.int);
          }
        }, 10);
      }
      audio.current.play();
      setIsPlaying(true);
    }
  };

  const stop = () => {
    audio.current.pause();
    setIsPlaying(false);
    setCurrentlyPlaying(undefined);
  };

  return (
    <AudioContext.Provider value={{ play, stop, isPlaying, currentlyPlaying }}>
      {children}
    </AudioContext.Provider>
  );
};

const useAudio = () => {
  return useContext(AudioContext);
};

export { useAudio, AudioProvider };
