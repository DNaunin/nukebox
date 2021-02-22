import styles from "../styles/Songitem.module.css";

type Props = {
  artist: string;
  title: string;
  image: string;
};

export default function SongItem({ image, title, artist }: Props) {
  return (
    <div className={styles.songitem}>
      <img className={styles.song__image} src={image} alt="" />
      <div className={styles.song__title}>{title}</div>
      <div className={styles.song__artist}>{artist}</div>
    </div>
  );
}
