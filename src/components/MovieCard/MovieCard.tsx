"use client";

import { Movie } from "../../../type";
import Image from "next/image";
import { getImagePath } from "@/lib/getImagePath";
import { useRouter } from "next/navigation";
import { useState } from "react";

const MovieCard = ({ movie }: { movie: Movie }) => {
    const router = useRouter();
    const handleRoute = () => {
        router.push(`/movie/${movie?.id}`);
    };

    const [error, setError] = useState(false);
    const fallbackSrc = "https://i.ibb.co/vVvBpzZ/360-F-482375378-9q1-OVUTCIKY029-UGNh-W0vb-OG6b-Nu-K3-SX.jpg";

    return (
        <div
            onClick={handleRoute}
            className="relative flex-shrink-0 cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover:drop-shadow-lg"
        >
            <div className="absolute inset-0 bg-black/50 z-10" /> {/* Actualizamos la clase para quitar el degradado */}
            <p className="absolute z-20 bottom-5 left-5 text-white">{movie?.title}</p>
            <Image
                src={error ? fallbackSrc : getImagePath(movie?.backdrop_path || movie?.poster_path)}
                alt={movie?.title}
                width={1920}
                height={1080}
                className="w-fit lg:min-w-[400px] h-56 object-cover shadow-md shadow-gray-900 drop-shadow-xl"
                onError={() => setError(true)}
            />
        </div>
    );
};

export default MovieCard;
