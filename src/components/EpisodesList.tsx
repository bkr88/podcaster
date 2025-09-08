import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import type { Episode } from '../types';

interface EpisodesListProps {
  items: Episode[];
}

const EpisodesList = ({ items }: EpisodesListProps) => (
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
        {items.map((row) => (
          <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component='th' scope='row'>
              {row.label}
            </TableCell>
            <TableCell align='right'>{row.date}</TableCell>
            <TableCell align='right'>{row.duration}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default EpisodesList;
