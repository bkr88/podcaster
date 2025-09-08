import { useQuery } from '@tanstack/react-query';
import { Chip, Grid, TextField } from '@mui/material';

import PodcastList from '../components/PodcastList';

import { fetchPodcastList } from '../helpers/home-helpers';
import type { Podcast } from '../types';

const Home = () => {
  const { isPending, isError, data, error } = useQuery<Podcast[]>({
    queryKey: ['podcasts'],
    queryFn: fetchPodcastList,
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
      <Grid size={4} offset={8}>
        <Chip label={data!.length} />

        <TextField size='small' id='outlined-basic' label='Outlined' variant='outlined' />
      </Grid>

      <Grid size={12}>
        <PodcastList items={data!} />
      </Grid>
    </Grid>
  );
};

export default Home;
