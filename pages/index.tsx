import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Greeting from "../components/Greeting";
import SongItem from "../components/SongItem";
import { APISong, getSongs } from "../utils/api";

export default function Home() {
  const [songs, setSongs] = useState<APISong[]>([]);

  useEffect(() => {
    console.log("Homepage is mounted now");
    getSongs().then((newSongs) => {
      setSongs(newSongs);
    });
  });

  const songItems = songs.map((song) => (
    <SongItem
      key={`${song.artist}-${song.title}`}
      image={song.image}
      artist={song.artist}
      title={song.title}
    />
  ));
  return (
    <div className={styles.container}>
      <Head>
        <title>Nukebox</title>
      </Head>

      <Greeting name="Dörte" />
      <ul className={styles.songlist}>{songItems}</ul>
    </div>
  );
}
