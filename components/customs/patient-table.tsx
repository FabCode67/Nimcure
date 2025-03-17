"use client"

import React, { useState, useEffect } from "react"
import { PatientInterface } from "@/app/interface/patient"
import PatientTable from "./patient-table/PatientTable"
import PatientCards from "./patient-table/PatientCards"
import Pagination from "./patient-table/Pagination"
import SearchAndFilter from "./patient-table/SearchAndFilter"
import { getStatusColor, sortPatients } from "@/utils/patient-utils"
import patientsData from "@/data/patient-data"

const ITEMS_PER_PAGE = 5

const PatientManagementPage = () => {
  const [patients] = useState<PatientInterface[]>(patientsData)
  const [sortBy, setSortBy] = useState<string>("Hospital ID")
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [filteredPatients, setFilteredPatients] = useState<PatientInterface[]>(patients)
  const [displayedPatients, setDisplayedPatients] = useState<PatientInterface[]>([])
  const [totalPages, setTotalPages] = useState<number>(1)
  const [isExpanded, setIsExpanded] = useState<number | null>(null)

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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
  }

  const toggleExpand = (index: number) => {
    if (isExpanded === index) {
      setIsExpanded(null)
    } else {
      setIsExpanded(index)
    }
  }

  return (
    <div className="container mx-auto py-4 md:py-6 px-4 md:px-6 max-w-7xl flex flex-col justify-center">
      <SearchAndFilter 
        sortBy={sortBy}
        setSortBy={setSortBy}
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
      />

      <PatientTable 
        displayedPatients={displayedPatients} 
        getStatusColor={getStatusColor}
      />

      <PatientCards 
        displayedPatients={displayedPatients}
        getStatusColor={getStatusColor}
        isExpanded={isExpanded}
        toggleExpand={toggleExpand}
      />

      <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        displayedPatientsCount={displayedPatients.length}
        totalPatientsCount={filteredPatients.length}
        itemsPerPage={ITEMS_PER_PAGE}
        handlePageChange={handlePageChange}
      />
    </div>
  )
}

export default PatientManagementPage