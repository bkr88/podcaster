import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';

import { Card, CardContent, Container, Grid, Typography } from '@mui/material';

import { getEpisode } from '../helpers/episodes-helpers';
import { getPodcast } from '../helpers/podcasts-helpers';
import { staleTime } from '../constants';
import PodcastCard from '../components/PodcastCard';
import type { Episode, Podcast } from '../types';

const EpisodeDetail = () => {
  const { podcastId, episodeId } = useParams();

  const podId = podcastId || '';
  const epiId = episodeId || '';

  const { data: podcast } = useQuery<Podcast>({
    queryKey: [`podcast:${podId}`],
    queryFn: getPodcast(podId),
    staleTime,
  });

  const {
    isPending,
    isError,
    data: episode,
    error,
  } = useQuery<Episode>({
    queryKey: [`episode:${epiId}`],
    queryFn: getEpisode(podId, epiId),
    staleTime,
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError || !episode) {
    console.error(error || 'No data');

    return <div>No data...</div>;
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

            <Container>
              <audio controls>
                <source src={episode?.url} />
                Tu navegador no soporta el elemento de audio.
              </audio>
            </Container>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default EpisodeDetail;
