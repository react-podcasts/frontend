const baseUrl = process.env.REACT_APP_URL_API;

const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const fetchPodcastPageData = async (feedUrl) => {
  const data = await fetchData(`${baseUrl}?feed=${feedUrl}`);
  return data;
};
