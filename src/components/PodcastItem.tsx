import { useNavigate } from 'react-router';

import { Card, CardActionArea, CardContent, Typography, Box } from '@mui/material';

import type { Podcast } from '../types';

interface PodcastItemProps {
  item: Podcast;
}

const PodcastItem = ({ item }: PodcastItemProps) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ position: 'relative' }} onClick={() => navigate(`/podcast/${item.id}`)}>
      <div
        style={{
          top: -70,
          left: 65,
          width: 150,
          height: 150,
          display: 'block',
          margin: '0 auto',
          cursor: 'pointer',
          borderRadius: 100,
          position: 'absolute',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(${item.image})`,
        }}
      />

      <Card sx={{ marginTop: 8 }}>
        <CardActionArea onClick={() => navigate(`/podcast/${item.id}`)} sx={{ paddingTop: 10 }}>
          <CardContent>
            <Typography gutterBottom variant='h5' component='div' sx={{ textAlign: 'center' }}>
              {item.name}
            </Typography>

            <Typography variant='body2' sx={{ color: 'text.secondary', textAlign: 'center' }}>
              {item.artist}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default PodcastItem;
