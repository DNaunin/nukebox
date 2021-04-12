import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Audioplayer.module.css";
import useLocalStorage from "../hooks/useLocalStorage";
import { deleteSong } from "../utils/api";
import { useRouter } from "next/router";
import Link from "next/link";

type Props = {
  id: string;
  src: string;
};

export default function AudioPlayer({ src, id }: Props) {
  const audioRef = useRef(new Audio(src));
  const intervalRef = useRef<NodeJS.Timeout>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  const audioElement = audioRef.current;

  const [favoriteSongs, setFavoriteSongs] = useLocalStorage<string[]>(
    "favoriteSongs",
    []
  );
  const favorite = favoriteSongs.includes(id);

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

  const handleDeleteClick = async () => {
    await deleteSong(id);
    router.back();
  };

  return (
    <figure className={styles.audiofigure}>
      <figcaption className={styles.playercaption}>
        <button className={styles.btn} onClick={handleDeleteClick}>
          🚮
        </button>
        <button className={styles.favbutton} onClick={handleFavoriteClick}>
          {favorite ? "❤️" : "🖤"}
        </button>
        <Link href={`/songs/${id}/update`}>
          <a>✍🏻</a>
        </Link>
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
