"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { useRouter } from "next/navigation";

interface Genre {
    id: number;
    name: string;
}

export function GenreCombobox() {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState<Genre | null>(null);
    const [genres, setGenres] = React.useState<Genre[]>([]);
    const [error, setError] = React.useState<string | null>(null);
    const router = useRouter();

    React.useEffect(() => {
        async function fetchGenres() {
            try {
                const response = await fetch("http://localhost:5200/apis/movie/genres");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setGenres(data.map((genre: { id: number; name: string }) => ({
                    id: genre.id,
                    name: genre.name,
                })));
            } catch (error: any) {
                setError(error.message);
            }
        }

        fetchGenres();
    }, []);

    const handleSelect = (genre: Genre) => {
        setValue(genre);
        setOpen(false);
        router.push(`/genre/${genre.id}?genre=${genre.name}`);
    };

    return (
        <div className="p-4">
            <h2 className="text-lg font-bold text-white mb-2">Genre</h2>
            {error ? (
                <div className="text-red-500">Failed to load genres: {error}</div>
            ) : (
                <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={open}
                            className="w-full justify-between bg-[#1C1C1C] text-white"
                        >
                            {value ? value.name : "Select genre..."}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                        <Command>
                            <CommandInput placeholder="Search genre..." />
                            <CommandList>
                                <CommandEmpty>No genre found.</CommandEmpty>
                                <CommandGroup>
                                    {genres.map((genre) => (
                                        <CommandItem
                                            key={genre.id}
                                            value={genre.name}
                                            onSelect={() => handleSelect(genre)}
                                            className="bg-[#1C1C1C] text-white"
                                        >
                                            <Check
                                                className={cn(
                                                    "mr-2 h-4 w-4",
                                                    value?.id === genre.id ? "opacity-100" : "opacity-0"
                                                )}
                                            />
                                            {genre.name}
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
            )}
        </div>
    );
}
