import { Outlet, useLocation, useNavigate } from 'react-router';
import { Container, Grid, Link } from '@mui/material';

const MainLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  return (
    <Container>
      <Grid container spacing={2} sx={{ paddingTop: 2, paddingBottom: 3 }}>
        <Grid size={10}>
          <Link
            sx={{
              fontSize: 24,
              color: 'primary',
              cursor: 'pointer',
              fontWeight: 'bold',
              textDecoration: 'none',
              fontFamily: 'sans-serif',
            }}
            onClick={() => navigate('/')}
          >
            PODCASTER
          </Link>
        </Grid>

        {!isHome && (
          <Grid size={2} textAlign='right'>
            <Link sx={{ cursor: 'pointer' }} onClick={() => navigate(-1)}>
              Back
            </Link>
          </Grid>
        )}

        <Grid size={12}>
          <Outlet />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainLayout;
