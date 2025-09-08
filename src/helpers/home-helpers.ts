import type { RawPodcast, Podcast } from '../types';

export function mapRawPodcast(data: RawPodcast[]): Podcast[] {
  return data.map((item: RawPodcast) => ({
    id: item.id.attributes['im:id'],
    name: item['im:name'].label,
    artist: item['im:artist'].label,
    image: item['im:image'][2].label,
    title: item.title.label,
    summary: item.summary.label,
  }));
}
