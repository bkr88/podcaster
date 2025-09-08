import type { RawEpisode, Episode } from '../types';

const millisToHMS = (ms: number): string => {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return [
    hours > 0 ? String(hours).padStart(2, '0') : '00',
    String(minutes).padStart(2, '0'),
    String(seconds).padStart(2, '0'),
  ].join(':');
};

const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

const mapEpisode = (item: RawEpisode): Episode => ({
  id: item.trackId.toString(),
  name: item.trackName,
  artist: item.artistName,
  date: formatDate(item.releaseDate),
  duration: millisToHMS(item.trackTimeMillis),
  url: item.feedUrl,
});

const fetchEpisodes = async (podcastId: string): Promise<Episode[]> => {
  const response = await fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `https://itunes.apple.com/lookup?id=${podcastId}&entity=podcastEpisode&limit=9 `
    )}`
  );

  if (response.ok) {
    const data = await response.json();
    const dataParsed: RawEpisode[] = JSON.parse(data.contents).results;
    const dataMapped = dataParsed.map((item) => mapEpisode(item));

    return dataMapped;
  } else {
    return [];
  }
};

export function getEpisodes(podcastId: string) {
  return async () => {
    const episodes = await fetchEpisodes(podcastId);

    if (!episodes) throw new Error('Podcast episodes not found');

    return episodes;
  };
}

const fetchEpisode = async (podcastId: string, episodeId: string): Promise<Episode> => {
  const episodes = await fetchEpisodes(podcastId);

  if (episodes.length > 0) {
    return episodes.find((episode) => episode.id === episodeId)!;
  } else {
    return Promise.reject('Episode not found');
  }
};

export function getEpisode(podcastId: string, episodeId: string) {
  return async () => {
    const podcast = await fetchEpisode(podcastId, episodeId);

    if (!podcast) throw new Error('Podcast episode not found');

    return podcast;
  };
}
