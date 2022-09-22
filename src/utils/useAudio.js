import { useRef, useState, useContext, createContext } from "react";

const AudioContext = createContext("./zones/001.mp3");
/**
 * This hook/context acts as a single interface for playing pieces of the large audio files which power this site.
 * Rather than having multiple sets of audio tags and play methods, the audio tag lives in the context, and
 * the hook provides methods for interacting with it. Other projects offered a great many features, but playing *parts*
 * of tracks was never one of them.
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
const AudioProvider = ({ children }) => {
  const audio = useRef(new Audio("./zones/001.mp3"));
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentlyPlaying, setCurrentlyPlaying] = useState("");

  const play = ({ track = "zones/001.mp3", id = "", start = 0, end }) => {
    if (audio.current) {
      audio.current.src = `./${track}`;
      // handle "already playing"
      audio.current.pause();
      clearInterval(audio.current.int);
      // reset play time
      audio.current.currentTime = start;
      // set interval to trigger stop if reach end of track (either as defined, or overall), and reset speaker to green
      audio.current.int = setInterval(() => {
        if (audio.current.currentTime > end || audio.current.paused) {
          audio.current.pause();
          setIsPlaying(false);
          clearInterval(audio.current.int);
        }
      }, 10);
      // Play
      audio.current.play();
      setCurrentlyPlaying(id);
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
