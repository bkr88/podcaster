import { Routes as ReactRoutes, Route } from 'react-router';

import MainLayout from './layout/MainLayout';

import Home from './views/Home';
import PodcastDetail from './views/PodcastDetail';
import EpisodeDetail from './views/EpisodeDetail';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />

        <Route path='podcast/:podcastId'>
          <Route index element={<PodcastDetail />} />

          <Route path='episode/:episodeId' element={<EpisodeDetail />} />
        </Route>
      </Route>
    </ReactRoutes>
  );
};

export default Routes;
