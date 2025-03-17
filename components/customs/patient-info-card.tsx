import React from 'react'
import { Card } from '../ui/card'

interface PatientData {
    hospitalId: string;
    name: string;
    phoneNumber: string;
    nextDeliveryDate: string;
    location: string;
}

const patient: PatientData = {
    hospitalId: "1AFHFH093",
    name: "Oluwaseun Aregbesola",
    phoneNumber: "+2347068642920",
    nextDeliveryDate: "12th September 2020",
    location: "Yaba, Lagos",
};

const PatientInfoCard = () => {
    return (
        <Card className="mb-8 w-[35%] border-0 shadow-none bg-white">
            <h2 className="text-lg font-medium mb-4">Patient Information</h2>

            <div className="grid grid-cols-1 gap-6">
                <div className="flex gap-3">
                    <p className="text-sm flex my-auto justify-center text-gray-500">Hospital ID</p>
                    <p className="font-medium flex my-auto justify-center">{patient.hospitalId}</p>
                </div>
                <div className="flex gap-3">
                    <p className="text-sm flex my-auto justify-center text-gray-500">Name</p>
                    <p className="font-medium flex my-auto justify-center">{patient.name}</p>
                </div>
                <div className="flex gap-3">
                    <p className="text-sm flex my-auto justify-center text-gray-500">Phone Number</p>
                    <p className="font-medium flex my-auto justify-center">{patient.phoneNumber}</p>
                </div>
                <div className="flex gap-3">
                    <p className="text-sm flex my-auto justify-center text-gray-500">Next Delivery Date</p>
                    <p className="font-medium flex my-auto justify-center">{patient.nextDeliveryDate}</p>
                </div>
                <div className="flex gap-3">
                    <p className="text-sm flex my-auto justify-center text-gray-500">Location</p>
                    <p className="font-medium flex my-auto justify-center">{patient.location}</p>
                </div>
            </div>
        </Card>
    )
}

export default PatientInfoCard