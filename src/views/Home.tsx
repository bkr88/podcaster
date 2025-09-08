import { useEffect, useState } from 'react';

import { Chip, Grid, TextField } from '@mui/material';

import type { Podcast } from '../types';

import PodcastList from '../components/PodcastList';

import { mapRawPodcast } from '../helpers/home-helpers';

const Home = () => {
  const [list, setList] = useState<Podcast[]>([]);

  const fetchList = async () => {
    const response = await fetch(
      'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
    );

    if (response.ok) {
      const data = await response.json();

      setList(mapRawPodcast(data.feed.entry));
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <Grid container>
      <Grid size={4} offset={8}>
        <Chip label={list.length} />

        <TextField size='small' id='outlined-basic' label='Outlined' variant='outlined' />
      </Grid>

      <Grid size={12}>
        <PodcastList items={list} />
      </Grid>
    </Grid>
  );
};

export default Home;
