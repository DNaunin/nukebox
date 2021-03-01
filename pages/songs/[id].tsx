import styles from "../../styles/Player.module.css";
import SongDetails from "../../components/SongDetails";
import AudioPlayer from "../../components/AudioPlayer";
import Navigation from "../../components/Navigation";
import { useEffect, useState } from "react";
import { APISong, getSong } from "../../utils/api";
import { useRouter } from "next/router";

export default function Song() {
  const router = useRouter();
  const { id: idQuery } = router.query;
  if (!idQuery) {
    return null;
  }
  const id = typeof idQuery !== "string" ? idQuery[0] : idQuery;

  const [song, setSong] = useState<APISong>(null);

  useEffect(() => {
    getSong(id).then((newSong) => setSong(newSong));
  }, [id]);

  if (!song) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.player}>
      <div>
        <header>
          <Navigation />
        </header>
      </div>
      <main>
        <SongDetails
          image={song.image}
          title={song.title}
          artist={song.artist}
        />
      </main>

      <footer>
        <AudioPlayer src={song.audio} id={song.id} />
      </footer>
    </div>
  );
}
