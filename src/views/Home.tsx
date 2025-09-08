import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Chip, Grid, TextField } from '@mui/material';

import PodcastList from '../components/PodcastList';

import { fetchPodcastList } from '../helpers/home-helpers';
import type { Podcast } from '../types';

const Home = () => {
  let list: Podcast[] = [];
  const [filter, setFilter] = useState('');

  const { isPending, isError, data, error } = useQuery<Podcast[]>({
    queryKey: ['podcasts'],
    queryFn: fetchPodcastList,
    staleTime: 24 * 60 * 60 * 1000,
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    console.error(error || 'No data');
  }

  list = data!;

  if (data && filter) {
    list = data.filter((item) => item.title!.toLowerCase().includes(filter.toLowerCase()));
  }

  return (
    <Grid container spacing={4}>
      <Grid size={4} offset={8} sx={{ textAlign: 'right' }}>
        <Chip label={list.length} sx={{ marginTop: 0.5 }} />

        <TextField
          size='small'
          label='Search'
          variant='outlined'
          value={filter}
          sx={{ marginLeft: 2 }}
          onChange={(event) => setFilter(event.target.value)}
        />
      </Grid>

      <Grid size={12}>
        <PodcastList items={list} />
      </Grid>
    </Grid>
  );
};

export default Home;
