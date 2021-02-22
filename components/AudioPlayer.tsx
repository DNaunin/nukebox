import styles from "../styles/Audioplayer.module.css";
import { useState, useEffect, useRef } from "react";

type Props = {
  audio: string;
};

export default function AudioPlayer({ audio }: Props) {
  // const [songIndex, setSongIndex] = useState(0);
  // const [songProgress, setSongProgress] = useState(0);
  // const [isPlaying, setIsPlaying] = useState(false);

  // const { title, artist, color, image, audioSrc } = songs[songIndex];

  // const audioRef = useRef(new Audio(audioSrc));
  // const intervalRef = useRef();
  // const isReady = useRef(false);

  // const { duration } = audioRef.current;

  return (
    <figure className={styles.audiofigure}>
      <figcaption className={styles.playercaption}>
        <img
          src="/Download.svg"
          className={styles.download}
          alt="fake download button"
        />
        <img
          src="/Heart.svg"
          className={styles.heart}
          alt="fake favourite button"
        />
        <img
          src="/Volume.svg"
          className={styles.volume}
          alt="fake volume button"
        />
      </figcaption>
      <audio controls src={audio}>
        <code>audio</code> element not supported.
      </audio>
    </figure>
  );
}
