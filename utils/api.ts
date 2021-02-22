export type APISong = {
  id: string;
  image: string;
  title: string;
  artist: string;
  audio: string;
};

export async function getSongs() {
  const response = await fetch("api/songs");
  const songs: APISong[] = await response.json();
  return songs;
}

export async function getSong(id: string) {
  const response = await fetch(`/api/songs/${id}`);
  const song: APISong = await response.json();
  return song;
}
