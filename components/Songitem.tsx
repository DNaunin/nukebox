import styles from "../styles/Songitem.module.css";

type Props = {
  artist: string;
  title: string;
  image: string;
};

export default function Songitem(props: Props) {
  return (
    <div className={styles.songitem}>
      <img className={styles.song__image} src={props.image} />
      <h4 className={styles.song__title}>{props.title}</h4>
      <p className={styles.song__artist}>{props.artist}</p>
    </div>
  );
}
