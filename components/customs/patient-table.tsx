"use client"

import React, { useState, useEffect } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { Search } from "lucide-react"
import patientsData from "@/data/patient-data"
import { PatientInterface } from "@/app/interface/patient"

const ITEMS_PER_PAGE = 5

const PatientManagementPage = () => {
  const [patients] = useState<PatientInterface[]>(patientsData)
  const [sortBy, setSortBy] = useState<string>("Hospital ID")
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [filteredPatients, setFilteredPatients] = useState<PatientInterface[]>(patients)
  const [displayedPatients, setDisplayedPatients] = useState<PatientInterface[]>([])
  const [totalPages, setTotalPages] = useState<number>(1)
  useEffect(() => {
    let result = [...patients]
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      result = result.filter(patient =>
        patient.id.toLowerCase().includes(term) ||
        patient.name.toLowerCase().includes(term) ||
        patient.phoneNumber.toLowerCase().includes(term) ||
        patient.location.toLowerCase().includes(term) ||
        patient.status.toLowerCase().includes(term)
      )
    }

    result = sortPatients(result, sortBy)
    setFilteredPatients(result)
    setTotalPages(Math.ceil(result.length / ITEMS_PER_PAGE))
    if (searchTerm || sortBy) {
      setCurrentPage(1)
    }
  }, [patients, searchTerm, sortBy])
  useEffect(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    const endIndex = startIndex + ITEMS_PER_PAGE
    setDisplayedPatients(filteredPatients.slice(startIndex, endIndex))
  }, [filteredPatients, currentPage])

  const sortPatients = (patientsToSort: PatientInterface[], sortCriteria: string) => {
    return [...patientsToSort].sort((a, b) => {
      switch (sortCriteria) {
        case "Hospital ID":
          return a.id.localeCompare(b.id)
        case "Patient's Name":
          return a.name.localeCompare(b.name)
        case "Next Delivery Date":
          return a.deliveryDate.localeCompare(b.deliveryDate)
        case "Location":
          return a.location.localeCompare(b.location)
        case "Status":
          return a.status.localeCompare(b.status)
        default:
          return 0
      }
    })
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
  }

  const getStatusColor = (status: PatientInterface["status"]) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800"
      case "Due & Paid":
        return "bg-orange-100 text-orange-800"
      case "Due & Unpaid":
        return "bg-red-100 text-red-800"
      case "Assigned":
        return "bg-blue-100 text-blue-800"
      case "Paid":
        return "bg-green-100 text-green-800"
      default:
        return ""
    }
  }


  return (
    <div className="container mx-auto py-6 max-w-7xl flex flex-col justify-center">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium">Sort by:</span>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent className="border-0 w-40">
              <SelectItem value="Hospital ID">Hospital ID</SelectItem>
              <SelectItem value="Patient's Name">{"Patient's Name"}</SelectItem>
              <SelectItem value="Next Delivery Date">Next Delivery Date</SelectItem>
              <SelectItem value="Location">Location</SelectItem>
              <SelectItem value="Status">Status</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            className="pl-10 w-64"
            placeholder="Search by name, ID, phone..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <div className="overflow-hidden bg-white">
        <Table className="border-0">
          <TableHeader className="border-0">
            <TableRow className="border-0 py-4 h-20">
              <TableHead className="font-medium text-sm py-4">Hospital ID</TableHead>
              <TableHead className="font-medium text-sm py-4">{"Patient's Name"}</TableHead>
              <TableHead className="font-medium text-sm py-4">Phone Number</TableHead>
              <TableHead className="font-medium text-sm py-4">Next Delivery Date</TableHead>
              <TableHead className="font-medium text-sm py-4">Location</TableHead>
              <TableHead className="font-medium text-sm py-4">Status</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {displayedPatients.length > 0 ? (
              displayedPatients.map((patient, index) => (
                <TableRow
                  key={index}
                  className="py-4 h-20"
                >
                  <TableCell className="text-sm py-4">{patient.id}</TableCell>
                  <TableCell className="text-sm py-4">{patient.name}</TableCell>
                  <TableCell className="text-sm py-4">{patient.phoneNumber}</TableCell>
                  <TableCell className="text-sm py-4">{patient.deliveryDate}</TableCell>
                  <TableCell className="text-sm py-4">{patient.location}</TableCell>
                  <TableCell className="py-4">
                    <span className={`text-xs px-2 py-[10px] ${getStatusColor(patient.status)}`}>
                      {patient.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right py-4">
                    <Button variant="outline" size="sm" className="text-blue-600 py-[10px] rounded-none">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8 text-gray-500">
                  No patients found matching your search criteria
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="flex items-center justify-between mt-4 border-t border-gray-200 pt-4 px-2">
          <p className="text-sm text-gray-500">
            Showing {displayedPatients.length > 0 ? (currentPage - 1) * ITEMS_PER_PAGE + 1 : 0} to {Math.min(currentPage * ITEMS_PER_PAGE, filteredPatients.length)} of {filteredPatients.length} patients
          </p>
          <div className="flex items-center space-x-1">
            <button
              className="px-4 py-2 text-sm border border-gray-400 rounded-full text-gray-500 hover:bg-gray-50"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                className={`w-8 h-8 flex items-center justify-center text-sm  rounded-full ${currentPage === page ? "border-gray-400 border text-gray-900" : "hover:border-gray-400"
                  }`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            ))}

            <button
              className="px-4 py-2 text-sm border  rounded-full text-gray-500 border-gray-400 hover:bg-gray-50"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatientManagementPage