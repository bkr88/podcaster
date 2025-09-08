import type { Podcast, RawPodcastDetail } from '../types';

const mapPodcastDetail = (item: RawPodcastDetail): Podcast => ({
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
    const dataMapped = mapPodcastDetail(dataParsed);

    return dataMapped;
  } else {
    return undefined;
  }
};
