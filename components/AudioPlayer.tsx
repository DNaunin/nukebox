import styles from "../styles/Audioplayer.module.css";

type Props = {
  audio: string;
};

export default function AudioPlayer({ audio }: Props) {
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
