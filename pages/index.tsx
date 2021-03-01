import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Greeting from "../components/Greeting";
import SongItem from "../components/SongItem";
import { APISong, getSongs } from "../utils/api";
import Link from "next/link";

export default function Home() {
  const [songs, setSongs] = useState<APISong[]>([]);

  useEffect(() => {
    getSongs().then((newSongs) => {
      setSongs(newSongs);
    });
  }, []);

  const songItems = songs.map((song) => (
    <Link href={`/songs/${song.id}`} key={song.id}>
      <a>
        <SongItem
          image={song.image}
          artist={song.artist}
          title={song.title}
          id={song.id}
        />
      </a>
    </Link>
  ));
  return (
    <div className={styles.container}>
      <Head>
        <title>Nukebox</title>
      </Head>

      <Greeting name="Dörte" />
      <Link href={`/new`}>
        <a className={styles.newsong}>➕</a>
      </Link>
      <ul className={styles.songlist}>{songItems}</ul>
    </div>
  );
}
