"use client";
import { SearchBox } from "./SearchBox";
import { GenreCombobox } from "./GenreCombobox";

export function NavigationPanel() {
    return (
        <div className="fixed left-0 top-[78px] h-[calc(100vh-78px)] w-[260px] bg-[#262626] p-4">
            <SearchBox />
            <div className="mt-4">
                <GenreCombobox />
            </div>
        </div>
    );
}
