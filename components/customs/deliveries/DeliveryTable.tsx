import React from 'react';
import { Button } from "@/components/ui/button";
import { DeliveryInterface } from '@/app/interface/deliveries';

export default function DeliveryTable({ filteredDeliveries }: { filteredDeliveries: DeliveryInterface[] }
) {
    return (
        <table className="hidden md:table w-full">
            <thead>
                <tr className="text-left text-gray-500 border-b">
                    <th className="p-4 font-medium">Package Code</th>
                    <th className="p-4 font-medium">Delivery Date</th>
                    <th className="p-4 font-medium">{"Patient's Name"}</th>
                    <th className="p-4 font-medium">Phone Number</th>
                    <th className="p-4 font-medium">Location</th>
                    <th className="p-4"></th>
                </tr>
            </thead>
            <tbody>
                {filteredDeliveries.length > 0 ? (
                    filteredDeliveries.map((delivery) => (
                        <tr key={delivery.id} className="border-b hover:bg-gray-50">
                            <td className="p-4">{delivery.packageCode}</td>
                            <td className="p-4">{delivery.deliveryDate}</td>
                            <td className="p-4">{delivery.patientName}</td>
                            <td className="p-4">{delivery.phoneNumber}</td>
                            <td className="p-4">{delivery.location}</td>
                            <td className="p-4">
                                <Button variant="outline" className="text-blue-600 hover:bg-blue-50">View</Button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={6} className="p-4 text-center text-gray-500">
                            No deliveries found matching your search criteria
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}
