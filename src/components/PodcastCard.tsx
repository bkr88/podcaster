import { Card, CardContent, Divider, Typography } from '@mui/material';

import type { Podcast } from '../types';

interface PodcastCardProps {
  item: Podcast;
}

const PodcastCard = ({ item }: PodcastCardProps) => {
  return (
    <Card>
      <div
        style={{
          width: 200,
          height: 200,
          display: 'block',
          margin: '2rem auto',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(${item.image})`,
        }}
      />

      <Divider />

      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {item.name}
        </Typography>

        <Typography variant='body2' sx={{ color: 'text.secondary' }}>
          <i>by {item.artist}</i>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PodcastCard;
