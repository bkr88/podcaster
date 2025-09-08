import { Routes as ReactRoutes, Route } from 'react-router';

import MainLayout from './layout/MainLayout';

import Home from './views/Home';
import Podcast from './views/Podcast';
import Episode from './views/Episode';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path='podcast/:podcastId'>
          <Route index element={<Podcast />} />

          <Route path='episode/:episodeId' element={<Episode />} />
        </Route>
      </Route>
    </ReactRoutes>
  );
};

export default Routes;
