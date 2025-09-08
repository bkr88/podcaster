export interface RawPodcast {
  id: { attributes: { 'im:id': string } };
  'im:name': { label: string };
  'im:artist': { label: string };
  'im:image': { label: string }[];
  title: { label: string };
  summary: { label: string };
}

export interface Podcast {
  id: string;
  name: string;
  artist: string;
  image: string;
  title: string;
  summary: string;
}
