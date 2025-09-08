import { Card, CardMedia, CardContent, Typography } from '@mui/material';

import type { Podcast } from '../types';

interface PodcastCardProps {
  item: Podcast;
}

const PodcastCard = ({ item }: PodcastCardProps) => {
  return (
    <Card>
      <CardMedia component='img' height='140' image={item.image} alt={`img-${item.id}`} />

      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {item.name}
        </Typography>

        <Typography variant='body2' sx={{ color: 'text.secondary' }}>
          {item.artist}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PodcastCard;
