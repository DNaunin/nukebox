import { useEffect, useState } from "react";
import styles from "../../../styles/New.module.css";
import { useRouter } from "next/router";
import { editSong, getSong } from "../../../utils/api";

export default function Update() {
  const router = useRouter();
  const { id: idQuery } = router.query;
  if (!idQuery) {
    return null;
  }
  const id = typeof idQuery !== "string" ? idQuery[0] : idQuery;

  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [audio, setAudio] = useState("");
  useEffect(() => {
    getSong(id).then((newSong) => {
      setArtist(newSong.artist);
      setTitle(newSong.title);
      setImage(newSong.image);
      setAudio(newSong.audio);
    });
  }, [id]);

  if (!artist || !title || !image || !audio) {
    return <div>Loading...</div>;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const changedSong = {
      id,
      artist,
      title,
      image,
      audio,
    };

    editSong(changedSong);
    alert("Your song has been edited");
  }

  return (
    <div>
      <button onClick={router.back}>Back</button>
      <h1>Edit a Song</h1>
      <form className={styles.newform} onSubmit={handleSubmit}>
        <label>
          Artist:
          <input
            value={artist}
            onChange={(event) => setArtist(event.target.value)}
            required
          />
        </label>
        <label>
          Title:
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </label>
        <label>
          Image-URL:
          <input
            value={image}
            onChange={(event) => setImage(event.target.value)}
            required
          />
        </label>
        <label>
          Song:
          <input
            value={audio}
            onChange={(event) => setAudio(event.target.value)}
            required
          />
        </label>
        <input className={styles.btn_send} type="submit" value="Edit Song" />
      </form>
    </div>
  );
}
