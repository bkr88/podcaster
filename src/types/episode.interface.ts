export interface RawEpisode {
  collectionId: number;
  trackName: string;
  artistName: string;
  releaseDate: string;
  trackTimeMillis: number;
}
export interface Episode {
  id: string;
  name: string;
  artist: string;
  date: string;
  duration: string;
}
