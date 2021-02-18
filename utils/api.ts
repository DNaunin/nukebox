export type APISong = {
  id: string;
  image: string;
  title: string;
  artist: string;
};

export async function getSongs() {
  const response = await fetch("api/tracks");
  const songs: APISong[] = await response.json();
  return songs;
}
