"use client"

import React from "react"

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  displayedPatientsCount: number;
  totalPatientsCount: number;
  itemsPerPage: number;
  handlePageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  displayedPatientsCount,
  totalPatientsCount,
  itemsPerPage,
  handlePageChange
}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 border-t border-gray-200 pt-4 px-2 gap-4">
      <p className="text-sm text-gray-500 text-center sm:text-left">
        Showing {displayedPatientsCount > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0} to {Math.min(currentPage * itemsPerPage, totalPatientsCount)} of {totalPatientsCount} patients
      </p>
      <div className="flex items-center  justify-center sm:justify-end space-x-1">
        <button
          className="px-2 cursor-pointer sm:px-4 py-2 text-sm border border-gray-400 rounded-full text-gray-500 hover:bg-gray-50"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        {totalPages <= 5 ? (
          Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`w-8 h-8 cursor-pointer flex items-center justify-center text-sm rounded-full ${
                currentPage === page ? "border-gray-400 border text-gray-900" : "hover:border-gray-400"
              }`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))
        ) : (
          <>
            {[
              1,
              ...(currentPage > 2 ? [currentPage > 3 ? "..." : 2] : [2]),
              ...(currentPage > 3 && currentPage < totalPages - 1 ? [currentPage] : []),
              ...(currentPage < totalPages - 1 ? [currentPage < totalPages - 2 ? "..." : totalPages - 1] : [totalPages - 1]),
              totalPages
            ].map((page, index) => (
              page === "..." ? (
                <span key={`ellipsis-${index}`} className="w-8 h-8 flex items-center justify-center">...</span>
              ) : (
                <button
                  key={page}
                  className={`w-8 h-8 flex cursor-pointer items-center justify-center text-sm rounded-full ${
                    currentPage === page ? "border-gray-400 border text-gray-900" : "hover:border-gray-400"
                  }`}
                  onClick={() => typeof page === 'number' && handlePageChange(page)}
                >
                  {page}
                </button>
              )
              ))}
          </>
        )}
        <button
          className="px-2 sm:px-4 py-2 cursor-pointer text-sm border rounded-full text-gray-500 border-gray-400 hover:bg-gray-50"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Pagination