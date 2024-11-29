"use client";
import { Search } from "lucide-react";

export function SearchBox() {
    return (
        <div className="p-4">
            <h2 className="text-lg font-bold text-white mb-2">Search</h2>
            <div className="relative">
                <input
                    type="text"
                    placeholder="Keywords"
                    className="w-full p-2 pr-12 rounded-md bg-[#1C1C1C] text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <button className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <Search className="text-gray-400 hover:text-gray-200" />
                </button>
            </div>
        </div>
    );
}
