import { Container, Grid, Link } from '@mui/material';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid size={10}>
          <Link href='/'>Podcaster</Link>
        </Grid>

        <Grid size={2}>Loading</Grid>

        <Grid size={12}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainLayout;
