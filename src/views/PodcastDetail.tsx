import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';

import { Card, Grid } from '@mui/material';

import { getPodcast } from '../helpers/podcasts-helpers';
import { staleTime } from '../constants';
import EpisodesList from '../components/EpisodesList';
import PodcastCard from '../components/PodcastCard';
import type { Podcast } from '../types';

const PodcastDetail = () => {
  let postId = '';
  const { podcastId } = useParams();

  postId = podcastId || '';

  const { isPending, isError, data, error } = useQuery<Podcast>({
    queryKey: [`podcast:${postId}`],
    queryFn: getPodcast(postId),
    staleTime,
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    console.error(error || 'No data');

    return <div>No data...</div>;
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
          <Card sx={{ marginTop: 2 }}>
            <EpisodesList podcastId={postId} />
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PodcastDetail;
