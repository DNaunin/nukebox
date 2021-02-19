import styles from "../styles/Audioplayer.module.css";

type Props = {
  audio: string;
};

export default function Audioplayer({ audio }: Props) {
  return (
    <figure className={styles.audiofigure}>
      <figcaption>Listen to this Song:</figcaption>
      <audio controls src={audio}>
        <code>audio</code> element not supported.
      </audio>
    </figure>
  );
}
