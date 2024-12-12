export interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
  overview: string;
}

export interface Props {
  movies: Movie[];
}
