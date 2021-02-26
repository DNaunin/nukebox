import styles from "../styles/Songitem.module.css";
import { deleteSong } from "../utils/api";
import { useRouter } from "next/router";

type Props = {
  artist: string;
  title: string;
  image: string;
  id: string;
};

export default function SongItem({ image, title, artist, id }: Props) {
  const router = useRouter();
  const handleDeleteClick = async () => {
    await deleteSong(id);
    router.reload();
  };

  return (
    <div className={styles.songitem}>
      <img className={styles.song__image} src={image} alt="" />
      <div className={styles.song__title}>{title}</div>
      <div className={styles.song__artist}>{artist}</div>
      <button className={styles.delete} onClick={handleDeleteClick}>
        🚮
      </button>
    </div>
  );
}
