export type APISong = {
  id: string;
  image: string;
  title: string;
  artist: string;
  audio: string;
};

async function fetchURL<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

export async function getSongs() {
  return await fetchURL<APISong[]>("/api/songs");
}

export async function getSong(id: string): Promise<APISong> {
  return await fetchURL<APISong>(`/api/songs/${id}`);
}

export async function deleteSong(id: string) {
  const response = await fetch(`/api/songs/${id}`, { method: "DELETE" });
  return response;
}

export async function createSong(newSong: APISong) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newSong),
  };
  return fetch(`http://localhost:3000/api/songs`, requestOptions);
}

export async function editSong(changedSong: APISong) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(changedSong),
  };
  return fetch(
    `http://localhost:3000/api/songs/${changedSong.id}`,
    requestOptions
  );
}
