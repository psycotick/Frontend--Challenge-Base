import { SearchResults } from "../../type";

const fetcher = async (url: URL, cacheTime?: number) => {
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
    next: {
      revalidate: cacheTime || 60 * 60 * 24,
    },
  };

  const response = await fetch(url.toString(), options);
  const data = (await response.json()) as SearchResults;

  return data;
};

export const getNowPlayingMovies = async () => {
  const url = new URL("http://localhost:5200/apis/movie/now_playing");
  const data = await fetcher(url);
  return data.results;
};

export const getUpcomingMovies = async () => {
  const url = new URL("http://localhost:5200/apis/movie/upcoming");
  const data = await fetcher(url);
  return data.results;
};

export const getTopRatedMovies = async () => {
  const url = new URL("http://localhost:5200/apis/movie/top_rated");
  const data = await fetcher(url);
  return data.results;
};

export const getPopularMovies = async () => {
  const url = new URL("http://localhost:5200/apis/movie/popular");
  const data = await fetcher(url);
  return data.results;
};

export const getDiscoverMovies = async (id?: string, keywords?: string) => {
  const url = new URL("http://localhost:5200/apis/movie/discover");

  keywords && url.searchParams.set("with_keywords", keywords);
  id && url.searchParams.set("with_genres", id);

  const data = await fetcher(url);
  return data.results;
};

export const getListMovies = async (genreId: string) => {
  const url = new URL("http://localhost:5200/apis/movie/list-movies");
  url.searchParams.set("id", genreId);

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }

  const data = await response.json();
  return data.results;
};

export const getSearchedMovies = async (term: string) => {
  const url = new URL("http://localhost:5200/apis/movie/search");
  url.searchParams.set("term", term);

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.statusText}`);
  }

  const data = await response.json();
  return data.results;
};

export const getMovieVideos = async (id?: string) => {
  const url = new URL(`http://localhost:5200/apis/movie/${id}/videos`);

  const data = await fetcher(url);
  return data.results;
};

export const getMovieDetails = async (id?: string) => {
  const url = new URL(`http://localhost:5200/apis/movie/${id}`);

  const data = await fetcher(url);
  return data;
};
