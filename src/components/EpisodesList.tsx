import { useNavigate } from 'react-router';
import { useQuery } from '@tanstack/react-query';

import {
  Link,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import { getEpisodes } from '../helpers/episodes-helpers';
import { staleTime } from '../constants';
import type { Episode } from '../types';

interface EpisodesListProps {
  podcastId: string;
}

const EpisodesList = ({ podcastId }: EpisodesListProps) => {
  const navigate = useNavigate();

  const { isPending, isError, data, error } = useQuery<Episode[]>({
    queryKey: [`podcastEpisodes:${podcastId}`],
    queryFn: getEpisodes(podcastId),
    staleTime,
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    console.error(error || 'No data');

    return <div>No data...</div>;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>

            <TableCell align='right'>Date</TableCell>

            <TableCell align='right'>Duration</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data!.map((row, index) => (
            <TableRow
              key={`episode-${index}`}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                <Link onClick={() => navigate(`/podcast/${podcastId}/episode/${row.id}`)}>
                  {row.name}
                </Link>
              </TableCell>

              <TableCell align='right'>{row.date}</TableCell>

              <TableCell align='right'>{row.duration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EpisodesList;
