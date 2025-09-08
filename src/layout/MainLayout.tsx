import { Outlet } from 'react-router';
import { Container, Grid, Link } from '@mui/material';
import Loading from '../components/Loading';

const MainLayout = () => (
  <Container>
    <Grid container spacing={2}>
      <Grid size={10}>
        <Link href='/'>PODCASTER</Link>
      </Grid>

      <Grid size={2}>
        <Loading />
      </Grid>

      <Grid size={12}>
        <Outlet />
      </Grid>
    </Grid>
  </Container>
);

export default MainLayout;
