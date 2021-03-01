// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import { readDB, writeDB } from "../../../server/db";
import { APISong } from "../../../utils/api";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  if (req.method === "GET") {
    const db = await readDB();
    const song = db.songs.find((song) => song.id === id);
    if (!song) {
      return res.status(404).json({
        status: 404,
        error: "Song not found",
      });
    }
    return res.status(200).json(song);
  }
  if (req.method === "DELETE") {
    const db = await readDB();
    db.songs = db.songs.filter((song) => song.id !== id);
    await writeDB(db);
    return res.status(200).json({
      status: 200,
      message: "${id} deleted",
    });
  }
  if (req.method === "POST") {
    const db = await readDB();
    const song = db.songs.find((song) => song.id === id);
    if (!song) {
      return res.status(404).json({
        status: 404,
        error: "Song not found",
      });
    }
    const changedSong: APISong = req.body;
    db.songs = db.songs.filter((song) => song.id !== id);
    db.songs = [...db.songs, changedSong];
    await writeDB(db);
    res.status(200).json(changedSong);
  }
  return res.status(405).end;
};
