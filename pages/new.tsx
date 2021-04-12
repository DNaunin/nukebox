import { useState } from "react";
import styles from "../styles/New.module.css";
import { useRouter } from "next/router";
import { createSong } from "../utils/api";

function generateId(artist, title) {
  const id = (artist + `_` + title).toLowerCase().replaceAll(" ", "-");
  return id;
}

export default function New() {
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [audio, setAudio] = useState("");

  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    const newSong = {
      id: generateId(artist, title),
      artist,
      title,
      image,
      audio,
    };
    createSong(newSong);
    alert("Your song has been added");
  }
  return (
    <div>
      <button onClick={router.back}>Back</button>
      <h1>Add a Song</h1>
      <form className={styles.newform} onSubmit={handleSubmit}>
        <label>
          Artist:
          <input
            value={artist}
            onChange={(event) => setArtist(event.target.value)}
            placeholder="Artist"
            required
          />
        </label>
        <label>
          Title:
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Title"
            required
          />
        </label>
        <label>
          Image-URL:
          <input
            value={image}
            onChange={(event) => setImage(event.target.value)}
            placeholder="Image"
            required
          />
        </label>
        <label>
          Song:
          <input
            value={audio}
            onChange={(event) => setAudio(event.target.value)}
            placeholder="Song"
            required
          />
        </label>
        <input className={styles.btn_send} type="submit" value="Add Song" />
      </form>
    </div>
  );
}
