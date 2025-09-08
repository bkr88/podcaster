import { Grid } from '@mui/material';

import type { Podcast } from '../types';
import PodcastItem from './PodcastItem';

interface PodcastListProps {
  items: Podcast[];
}

const PodcastList = ({ items }: PodcastListProps) => (
  <Grid container spacing={2}>
    {items.map((item) => (
      <Grid size={3} key={item.id}>
        <PodcastItem item={item} />
      </Grid>
    ))}
  </Grid>
);

export default PodcastList;
