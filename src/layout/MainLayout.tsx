import { Outlet, useNavigate } from 'react-router';
import { Container, Grid, Link } from '@mui/material';
// import Loading from '../components/Loading';

const MainLayout = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid size={10}>
          <Link onClick={() => navigate('/')}>PODCASTER</Link>
        </Grid>

        {/* <Grid size={2}>
          <Loading />
        </Grid> */}

        <Grid size={12}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainLayout;
