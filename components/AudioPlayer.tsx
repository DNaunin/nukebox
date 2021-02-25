import { useEffect, useRef, useState } from "react";
import styles from "../styles/Audioplayer.module.css";
import useLocalStorage from "../hooks/useLocalStorage";

type Props = {
  id: string;
  src: string;
};

export default function AudioPlayer({ src, id }: Props) {
  const audioRef = useRef(new Audio(src));
  const intervalRef = useRef<NodeJS.Timeout>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const audioElement = audioRef.current;

  // const [favorite, setFavorite] = useState(null);
  const [favoriteSongs, setFavoriteSongs] = useLocalStorage<string[]>(
    "favoriteSongs",
    []
  );
  const favorite = favoriteSongs.includes(id);

  // useEffect(() => {
  //   if (typeof id != "string" || favorite === null) {

  const handleFavoriteClick = () => {
    if (favorite) {
      const newFavoriteSongs = favoriteSongs.filter(
        (favoriteSong) => favoriteSong !== id
      );
      setFavoriteSongs(newFavoriteSongs);
    } else {
      setFavoriteSongs([...favoriteSongs, id]);
    }
  };

  //   return;
  // }

  useEffect(() => {
    if (isPlaying) {
      audioElement.play();
      intervalRef.current = setInterval(() => {
        setProgress(audioElement.currentTime);
      }, 2000);
    } else {
      clearInterval(intervalRef.current);
      audioElement.pause();
    }
  }, [isPlaying]);

  return (
    <figure className={styles.audiofigure}>
      <figcaption className={styles.playercaption}>
        <img
          src="/Download.svg"
          className={styles.download}
          alt="fake download button"
        />
        <button className={styles.favbutton} onClick={handleFavoriteClick}>
          {favorite ? <img src="/Heart.svg" /> : "🖤"}
        </button>
        <img
          src="/Volume.svg"
          className={styles.volume}
          alt="fake volume button"
        />
      </figcaption>
      <div className={styles.audioPlayer}>
        <input
          className={styles.duration}
          type="range"
          min="0"
          max={audioElement.duration}
          value={progress}
        />

        <button className={styles.btn} onClick={() => setIsPlaying(!isPlaying)}>
          <img
            className="btn__image"
            src={isPlaying ? "/pauseButton.svg" : "/playButton.svg"}
          />
        </button>
      </div>
    </figure>
  );
}
