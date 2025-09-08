import { useNavigate } from 'react-router';

import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

import type { Podcast } from '../types';

interface PodcastItemProps {
  item: Podcast;
}

const PodcastItem = ({ item }: PodcastItemProps) => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardActionArea onClick={() => navigate(`/podcast/${item.id}`)}>
        <CardMedia component='img' height='140' image={item.image} alt={`img-${item.id}`} />

        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {item.name}
          </Typography>

          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            {item.artist}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PodcastItem;
