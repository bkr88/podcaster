import { useState } from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';

import { Card, CardContent, Container, Grid, Typography } from '@mui/material';

import type { Episode, Podcast } from '../types';

import PodcastCard from '../components/PodcastCard';
import { fetchEpisode } from '../helpers/episodes-helpers';
import { fetchPodcastItem } from '../helpers/podcasts-helpers';

const EpisodeDetail = () => {
  let podId = '';
  let epiId = '';
  const { podcastId, episodeId } = useParams();

  const [media, setMedia] = useState('');

  podId = podcastId || '';
  epiId = episodeId || '';

  const { data: podcast } = useQuery<Podcast>({
    queryKey: [`podcast:${podId}`],
    queryFn: async () => {
      const podcast = await fetchPodcastItem(podId);
      if (!podcast) throw new Error('Podcast not found');
      return podcast;
    },
    staleTime: 24 * 60 * 60 * 1000,
  });

  const {
    isPending,
    isError,
    data: episode,
    error,
  } = useQuery<Episode>({
    queryKey: [`episode:${epiId}`],
    queryFn: async () => {
      const podcast = await fetchEpisode(podId, epiId);
      if (!podcast) throw new Error('Podcast episode not found');
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

  if (!episode) {
    console.error('No data');
  }

  return (
    <Grid container spacing={4}>
      <Grid size={4}>
        <PodcastCard item={podcast!} />
      </Grid>

      <Grid size={8}>
        <Card>
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Episode: {episode?.name}
            </Typography>

            <Typography variant='body2' sx={{ color: 'text.secondary' }}>
              Artist: {podcast?.artist}
            </Typography>

            <br />

            {media && (
              <Container>
                <audio controls>
                  <source src={media} />
                  Tu navegador no soporta el elemento de audio.
                </audio>
              </Container>
            )}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default EpisodeDetail;
