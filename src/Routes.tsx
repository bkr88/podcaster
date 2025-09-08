import { Routes as ReactRoutes, Route } from 'react-router';

import MainLayout from './layout/MainLayout';

import Home from './views/Home';
import Podcasts from './views/Podcasts';
import Episodes from './views/Episodes';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path='podcast/:podcastId'>
          <Route index element={<Podcasts />} />

          <Route path='episode/:episodeId' element={<Episodes />} />
        </Route>
      </Route>
    </ReactRoutes>
  );
};

export default Routes;
