export interface RawEpisode {
  trackId: number;
  trackName: string;
  artistName: string;
  releaseDate: string;
  trackTimeMillis: number;
  feedUrl: string;
}
export interface Episode {
  id: string;
  name: string;
  artist: string;
  date: string;
  duration: string;
  url: string;
}
