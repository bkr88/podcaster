import { Routes as RRoutes, Route } from 'react-router';

import Home from './Home';
import Podcast from './views/Podcast';
import Episode from './views/Episode';

const Routes = () => {
  return (
    <RRoutes>
      <Route path='/podcast'>
        <Route index element={<Home />} />

        <Route path=':podcastId'>
          <Route index element={<Podcast />} />

          <Route path='episode/:episodeId' element={<Episode />} />
        </Route>
      </Route>
    </RRoutes>
  );
};

export default Routes;
