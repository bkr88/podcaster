import type { RawPodcastApple, Podcast } from '../types';

const mapRawPodcast = (data: RawPodcastApple[]): Podcast[] => {
  return data.map((item: RawPodcastApple) => ({
    id: item.id.attributes['im:id'],
    name: item['im:name'].label,
    artist: item['im:artist'].label,
    image: item['im:image'][2].label,
    title: item.title.label,
    summary: item.summary.label,
  }));
};

export const fetchPodcastList = async (): Promise<Podcast[]> => {
  const response = await fetch(
    'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
  );

  if (response.ok) {
    const data = await response.json();

    return mapRawPodcast(data.feed.entry);
  } else {
    return [];
  }
};
