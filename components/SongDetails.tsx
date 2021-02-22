import styles from "../styles/SongDetails.module.css";

type Props = {
  image: string;
  title: string;
  artist: string;
};

export default function SongDetails({ image, title, artist }: Props) {
  return (
    <div className={styles.SongDetails}>
      <img className={styles.image__player} src={image} />
      <div className={styles.SongInfo}>
        {title} by {artist}
      </div>
    </div>
  );
}
