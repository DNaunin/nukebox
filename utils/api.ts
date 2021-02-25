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
