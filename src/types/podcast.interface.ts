export interface RawPodcastApple {
  id: { attributes: { 'im:id': string } };
  'im:name': { label: string };
  'im:artist': { label: string };
  'im:image': { label: string }[];
  title: { label: string };
  summary: { label: string };
}

export interface RawPodcastDetail {
  artistName: string;
  collectionName: string;
  artworkUrl600: string;
  collectionId: string;
  trackCount: number;
}

export interface Podcast {
  id: string;
  name: string;
  artist: string;
  image: string;
  title?: string;
  summary?: string;
  episodeCount?: string;
  episodes?: Podcast[];
  date?: string;
  duration?: string;
}
