"use client"

import React from "react"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Search } from "lucide-react"

interface SearchAndFilterProps {
  sortBy: string;
  setSortBy: (value: string) => void;
  searchTerm: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
  sortBy,
  setSortBy,
  searchTerm,
  handleSearchChange
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
      <div className="flex items-center space-x-2 md:w-[17%] w-[60%]">
        <span className="text-sm w-full font-medium">Sort by:</span>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent className="border-0 w-full sm:w-40">
            <SelectItem value="Hospital ID">Hospital ID</SelectItem>
            <SelectItem value="Patient's Name">{"Patient's Name"}</SelectItem>
            <SelectItem value="Next Delivery Date">Next Delivery Date</SelectItem>
            <SelectItem value="Location">Location</SelectItem>
            <SelectItem value="Status">Status</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="relative w-full sm:w-auto">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          className="pl-10 w-full sm:w-64"
          placeholder="Search by name, ID, phone..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  )
}

export default SearchAndFilter