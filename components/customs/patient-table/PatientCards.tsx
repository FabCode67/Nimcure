"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { PatientInterface } from "@/app/interface/patient"
import { useRouter } from "next/navigation"

interface PatientCardsProps {
  displayedPatients: PatientInterface[];
  getStatusColor: (status: PatientInterface["status"]) => string;
  isExpanded: number | null;
  toggleExpand: (index: number) => void;
}

const PatientCards: React.FC<PatientCardsProps> = ({ 
  displayedPatients, 
  getStatusColor,
  isExpanded,
  toggleExpand
}) => {
    const router = useRouter();
    const handleViewDetails = (id: string) => {
        router.push(`/dashboard/patients/${id}`);
        }
  return (
    <div className="md:hidden space-y-4">
      {displayedPatients.length > 0 ? (
        displayedPatients.map((patient, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-0">
              <div 
                className="flex justify-between items-center p-4 cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <div>
                  <p className="font-medium">{patient.name}</p>
                  <p className="text-sm text-gray-500">{patient.id}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`text-xs px-2 py-[6px] ${getStatusColor(patient.status)}`}>
                    {patient.status}
                  </span>
                  <ChevronDown className={`h-5 w-5 transition-transform ${isExpanded === index ? 'transform rotate-180' : ''}`} />
                </div>
              </div>
              {isExpanded === index && (
                <div className="border-t p-4 space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-gray-500">Phone Number</p>
                      <p className="text-sm">{patient.phoneNumber}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Next Delivery</p>
                      <p className="text-sm">{patient.deliveryDate}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Location</p>
                      <p className="text-sm">{patient.location}</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <Button
                    
                        onClick={() => handleViewDetails(patient.id)} 
                     variant="outline" size="sm" className="text-blue-600 w-full py-[10px] rounded-none">
                      View Details
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))
      ) : (
        <div className="text-center py-8 text-gray-500">
          No patients found matching your search criteria
        </div>
      )}
    </div>
  )
}

export default PatientCards