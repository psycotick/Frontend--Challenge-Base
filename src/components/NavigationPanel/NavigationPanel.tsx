"use client";
import { SearchBox } from "./SearchBox";
import { GenreCombobox } from "./GenreCombobox";

export function NavigationPanel() {
    return (
        <div className="h-full w-full p-4 bg-[#262626] rounded-lg shadow-md">
            <div className="bg-[#262626] p-4 rounded-lg shadow-sm"> 
                <SearchBox />
                <div className="mt-4">
                    <GenreCombobox />
                </div>
            </div>
        </div>
    );
}
