"use client"

import React from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { PatientInterface } from "@/app/interface/patient"
import { useRouter } from "next/navigation"

interface PatientTableProps {
  displayedPatients: PatientInterface[];
  getStatusColor: (status: PatientInterface["status"]) => string;
}

const PatientTable: React.FC<PatientTableProps> = ({ 
  displayedPatients, 
  getStatusColor 
}) => {
    const route = useRouter();
  return (
    <div className="hidden md:block overflow-hidden bg-white">
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
                  <Button 
                    onClick={() => route.push(`/dashboard/patients/${patient.id}`)}
                   variant="outline" size="sm" className="text-blue-600 py-[10px] rounded-none">
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
    </div>
  )
}

export default PatientTable