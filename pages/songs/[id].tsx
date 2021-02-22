import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { APISong, getSong } from "../../utils/api";
import styles from "../../styles/Player.module.css";
import SongDetails from "../../components/SongDetails";
import AudioPlayer from "../../components/AudioPlayer";
import Navigation from "../../components/Navigation";

export default function Song() {
  const router = useRouter();
  const { id } = router.query;

  const [song, setSong] = useState<APISong>(null);

  useEffect(() => {
    if (typeof id !== "string") {
      return;
    }
    getSong(id).then((newSong) => {
      setSong(newSong);
    });
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
        <AudioPlayer audio={song.audio} />
      </footer>
    </div>
  );
}