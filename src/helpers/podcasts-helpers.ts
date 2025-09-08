import type { Podcast } from '../types';
import type { RawPodcastBP } from '../types/podcast.interface';

const mapPodcastBP = (item: RawPodcastBP): Podcast => ({
  id: item.collectionId.toString(),
  name: item.collectionName,
  artist: item.artistName,
  image: item.artworkUrl600,
  episodeCount: item.trackCount.toString(),
});

export const fetchPodcastItem = async (podcastId: string): Promise<Podcast | undefined> => {
  const response = await fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `https://itunes.apple.com/lookup?id=${podcastId!}`
    )}`
  );

  if (response.ok) {
    const data = await response.json();
    const dataParsed = JSON.parse(data.contents).results[0];

    return mapPodcastBP(dataParsed);
  } else {
    return undefined;
  }
};
