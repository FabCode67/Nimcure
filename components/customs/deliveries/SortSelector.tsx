import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";

export default function SortSelector({ sortOrder, onSortChange, isMobile = false }:
    { sortOrder: string, onSortChange: (value: string) => void, isMobile?: boolean }
) {
    return (
        <div className="flex items-center">
            <span className={`mr-2 ${isMobile ? 'text-xs' : 'text-sm'} text-gray-600`}>Sort by</span>
            <Select value={sortOrder} onValueChange={onSortChange}>
                <SelectTrigger className={`${isMobile ? 'w-32 text-xs' : 'w-40 text-sm'}`}>
                    <SelectValue placeholder="Most Recent" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="most-recent">Most Recent</SelectItem>
                    <SelectItem value="oldest">Oldest</SelectItem>
                    <SelectItem value="name-asc">Name A-Z</SelectItem>
                    <SelectItem value="name-desc">Name Z-A</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}