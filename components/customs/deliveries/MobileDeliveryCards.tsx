import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { DeliveryInterface } from '@/app/interface/deliveries';

export default function MobileDeliveryCards({ filteredDeliveries, expandedRows, toggleRowExpand }
    : { filteredDeliveries: DeliveryInterface[], expandedRows: { [key: string]: boolean }, toggleRowExpand: (id: string)
        => void }
) {
    return (
        <div className="md:hidden">
            {filteredDeliveries.length > 0 ? (
                filteredDeliveries.map((delivery) => (
                    <div key={delivery.id} className="mb-4 bg-white p-4 ">
                        <div className="flex justify-between items-center mb-2">
                            <div className="font-medium">{delivery.packageCode}</div>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="p-1"
                                onClick={() => toggleRowExpand(delivery.id)}
                            >
                                {expandedRows[delivery.id] ? (
                                    <ChevronUp className="h-5 w-5" />
                                ) : (
                                    <ChevronDown className="h-5 w-5" />
                                )}
                            </Button>
                        </div>
                        <div className="flex justify-between text-sm">
                            <div className="text-gray-600">
                                {delivery.patientName}
                            </div>
                            <div className="text-gray-600">
                                {delivery.deliveryDate}
                            </div>
                        </div>

                        {expandedRows[delivery.id] && (
                            <div className="mt-4 pt-4 border-t">
                                <div className="grid grid-cols-2 gap-2 text-sm">
                                    <div className="text-gray-500">Phone:</div>
                                    <div>{delivery.phoneNumber}</div>
                                    <div className="text-gray-500">Location:</div>
                                    <div>{delivery.location}</div>
                                </div>
                                <div className="mt-4">
                                    <Button variant="outline" className="w-full text-blue-600 hover:bg-blue-50">View Details</Button>
                                </div>
                            </div>
                        )}
                    </div>
                ))
            ) : (
                <div className="p-4 text-center text-gray-500">
                    No deliveries found matching your search criteria
                </div>
            )}
        </div>
    );
}