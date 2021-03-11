const baseUrl = 'https://rss.itunes.apple.com/api/v1/ru/podcasts/top-podcasts';

const transformPodcastData = (podcast) => {
  return {
    id: podcast.id,
    title: podcast.name,
    author: podcast.artistName,
    coverUrl100: podcast.artworkUrl100
  };
};

const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data.feed.results.map(transformPodcastData);
};

export const getPodcastByGenre = async (genre = 'all', count = 25) => {
  const data = await fetchData(`${baseUrl}/${genre}/${count}/explicit.json`);
  return data;
};
