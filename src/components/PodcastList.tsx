import { Grid } from '@mui/material';

import type { Podcast } from '../types';
import PodcastItem from './PodcastItem';

interface PodcastListProps {
  items: Podcast[];
}

const PodcastList = ({ items }: PodcastListProps) => (
  <Grid container spacing={2}>
    {items.map((item) => (
      <Grid size={3}>
        <PodcastItem item={item} key={item.id} />
      </Grid>
    ))}
  </Grid>
);

export default PodcastList;
