import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';

import type { Podcast } from '../types';
import { fetchPodcastItem } from '../helpers/podcasts-helpers';
import { Card, Grid } from '@mui/material';
import PodcastCard from '../components/PodcastCard';
import EpisodesList from '../components/EpisodesList';

const PodcastDetail = () => {
  let postId = '';
  const { podcastId } = useParams();

  postId = podcastId || '';

  const { isPending, isError, data, error } = useQuery<Podcast>({
    queryKey: [`podcast:${postId}`],
    queryFn: async () => {
      const podcast = await fetchPodcastItem(postId);
      if (!podcast) throw new Error('Podcast not found');
      return podcast;
    },
    staleTime: 24 * 60 * 60 * 1000,
  });

  if (isError) {
    console.error(error);
  }

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (!data) {
    console.error('No data');
  }

  return (
    <Grid container spacing={4}>
      <Grid size={4}>
        <PodcastCard item={data!} />
      </Grid>

      <Grid size={8}>
        <Grid size={12}>
          <Card sx={{ padding: 2 }}>
            <b>Episodes: {data?.episodeCount}</b>
          </Card>
        </Grid>

        <Grid size={12}>
          <Card sx={{ padding: 2, marginTop: 2 }}>
            <EpisodesList podcastId={postId} />
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PodcastDetail;
