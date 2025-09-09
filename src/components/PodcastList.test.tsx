import { MemoryRouter } from 'react-router';
import { render, screen } from '@testing-library/react';

import PodcastList from './PodcastList';
import type { Podcast } from '../types';

const mockPodcasts: Podcast[] = [
  {
    id: '1',
    name: "Tony Mantor's : Almost Live..... Nashville",
    artist: 'Tony Mantor',
    image: 'tony.jpg',
  },
  {
    id: '2',
    name: 'Decoding Taylor Swift: A Storytelling Revolution',
    artist: 'Joe Romm and Toni Romm',
    image: 'taylor.jpg',
  },
];

test('renders all podcasts', () => {
  render(
    <MemoryRouter>
      <PodcastList items={mockPodcasts} />
    </MemoryRouter>
  );

  const cards = screen.getAllByTestId('podcast-card');
  expect(cards).toHaveLength(mockPodcasts.length);

  mockPodcasts.forEach((podcast) => {
    expect(screen.getByText(podcast.name)).toBeInTheDocument();
    expect(screen.getByText(podcast.artist)).toBeInTheDocument();
  });
});
