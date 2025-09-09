import { MemoryRouter } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';

import * as helpers from '../helpers/home-helpers';
import Home from './Home';
import type { Podcast } from '../types';

const mockPodcasts: Podcast[] = [
  { id: '1', name: 'Podcast 1', artist: 'Artista 1', image: 'uno.jpg' },
  { id: '2', name: 'Podcast 2', artist: 'Artista 2', image: 'dos.jpg' },
];

vi.spyOn(helpers, 'fetchPodcastList').mockResolvedValue(mockPodcasts);

test('Display podcast list and filter by text', async () => {
  const queryClient = new QueryClient();

  render(
    <MemoryRouter>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </MemoryRouter>
  );

  expect(screen.getByText(/loading/i)).toBeInTheDocument();

  expect(await screen.findByText('Podcast 1')).toBeInTheDocument();
  expect(screen.getByText('Podcast 2')).toBeInTheDocument();

  const input = screen.getByLabelText(/search/i);
  fireEvent.change(input, { target: { value: '1' } });

  expect(screen.getByText('Podcast 1')).toBeInTheDocument();
  expect(screen.queryByText('Podcast 2')).not.toBeInTheDocument();
});
