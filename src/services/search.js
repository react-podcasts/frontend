const baseUrl = 'https://itunes.apple.com/search';

const transformPodcastData = (podcast) => {
  return {
    id: podcast.trackId,
    title: podcast.trackName,
    author: podcast.artistName,
    coverUrl60: podcast.artworkUrl60
  };
};

const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();

  if (data.resultCount === 0) {
    throw new Error('Podcasts not found');
  }

  return data.results.map(transformPodcastData);
};

export const fetchPodcasts = async (term) => {
  const podcasts = await fetchData(`${baseUrl}?term=${term}&entity=podcast&country=RU`);
  return podcasts;
};
