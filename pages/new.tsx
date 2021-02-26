import { useState } from "react";
import styles from "../styles/New.module.css";

export default function New(props) {
  const [id, setID] = useState("");
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [audio, setAudio] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`ÌD: $(id)`);
  }
  return (
    <form className={styles.newform} onSubmit={handleSubmit}>
      <label>
        ID:
        <input value={id} onChange={(event) => setID(event.target.value)} />
      </label>
      <label>
        Artist:
        <input
          value={artist}
          onChange={(event) => setArtist(event.target.value)}
        />
      </label>
      <label>
        Title:
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <label>
        Image-URL:
        <input
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
      </label>
      <label>
        Song:
        <input
          value={audio}
          onChange={(event) => setAudio(event.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
}
