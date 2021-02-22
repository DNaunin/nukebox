import React from "react";
// import { ReactComponent as Play } from "/play.svg";
// import { ReactComponent as Pause } from "play.svg";
// import { ReactComponent as Next } from "/forward.svg";
// import { ReactComponent as Prev } from "/forward.svg";
import styles from "../styles/AudioControls.module.css";

export default function AudioControls({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}) {
  <div className={styles.audiocontrols}>
    <button
      type="button"
      className={styles.prev}
      aria-label="Previous"
      onClick={onPrevClick}
    >
      <img src="/forward.svg" alt="" />
    </button>
    {isPlaying ? (
      <button
        type="button"
        className={styles.pause}
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <img src="/play.svg" alt="" />
      </button>
    ) : (
      <button
        type="button"
        className={styles.play}
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        <img src="/play.svg" alt="" />
      </button>
    )}
    <button
      type="button"
      className={styles.next}
      onClick={onNextClick}
      aria-label="Next"
    >
      <img src="/forward.svg" alt="" />
    </button>
  </div>;
}
