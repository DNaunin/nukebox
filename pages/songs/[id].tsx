import styles from "../../styles/Player.module.css";
import SongDetails from "../../components/SongDetails";
import AudioPlayer from "../../components/AudioPlayer";
import Navigation from "../../components/Navigation";
import { useState } from "react";
import { APISong, getSong } from "../../utils/api";
import { useRouter } from "next/router";

export default function Song() {
  const router = useRouter();
  const { id } = router.query;

  const [song, setSong] = useState<APISong>(null);

  if (typeof id !== "string") {
    return;
  }
  getSong(id).then((newSong) => {
    setSong(newSong);
  });

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
