"use client";

import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";
import Image from "next/image";
import { useState } from "react";
import { getImagePath } from "@/lib/getImagePath";
import { ImageProps, Movie, Props } from "./types";

const HeroCarousel = ({ movies }: Props) => {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [AutoPlay()]);

    return (
        <div className="overflow-hidden cursor-pointer relative" ref={emblaRef}>
            <div className="flex">
                {movies.map((movie) => (
                    <div key={movie?.id} className="flex-full min-w-0 relative">
                        <ImageWithFallback
                            src={getImagePath(movie?.backdrop_path, true)}
                            alt={movie?.title}
                            width={1920}
                            height={1080}
                        />
                        <div className="hidden lg:inline absolute top-0 pt-40 xl:pt-72 left-0 bg-transparent z-20 h-full w-full p-10 space-y-5 text-white"> {/* Se removió la clase bg-gradient-to-r */}
                            <h2 className="text-5xl font-bold max-w-xl">{movie?.title}</h2>
                            <p className="max-w-xl line-clamp-3">{movie?.overview}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ImageWithFallback = ({ src, alt, width, height }: ImageProps) => {
    const [error, setError] = useState(false);
    const fallbackSrc = "https://i.ibb.co/vVvBpzZ/360-F-482375378-9q1-OVUTCIKY029-UGNh-W0vb-OG6b-Nu-K3-SX.jpg";

    return (
        <Image
            src={error ? fallbackSrc : src}
            alt={alt}
            width={width}
            height={height}
            onError={() => setError(true)}
        />
    );
};

export default HeroCarousel;
