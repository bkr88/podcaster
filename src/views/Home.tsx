import { useEffect, useState } from 'react';

import { Chip, Grid, TextField } from '@mui/material';

import type { Podcast, RawPodcast } from '../types';

import PodcastList from '../components/PodcastList';

const Home = () => {
  const [list, setList] = useState<Podcast[]>([]);

  const fetchList = async () => {
    const response = await fetch(
      'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json'
    );

    if (response.ok) {
      const data = await response.json();

      setList(
        data.feed.entry.map((item: RawPodcast) => ({
          id: item.id.attributes['im:id'],
          name: item['im:name'].label,
          artist: item['im:artist'].label,
          image: item['im:image'][2].label,
          title: item.title.label,
          summary: item.summary.label,
        }))
      );
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
