import CarouselBanner from "@/components/CarouselBanner/CarouselBanner";
import MovieContainer from "@/components/MovieContainer/MovieContainer";
import { NavigationPanel } from "@/components/NavigationPanel";
import {
  getNowPlayingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";

export default async function Home() {
  const nowPlayingMovies = await getNowPlayingMovies();
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <main>
      <CarouselBanner />
      <div className="flex">
        <div className="flex-none w-full lg:w-1/4">
          <NavigationPanel />
        </div>
        <div className="flex-grow w-full lg:w-3/4 flex flex-col space-y-2">
          <MovieContainer movies={popularMovies} title="Popular" />
          <MovieContainer movies={nowPlayingMovies} title="Now Playing" />
          <MovieContainer movies={upcomingMovies} title="Upcoming" />
          <MovieContainer movies={topRatedMovies} title="Top Rated" />
        </div>
      </div>
    </main>
  );
}
