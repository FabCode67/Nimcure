// components/RiderSelection.tsx
import riders from '@/data/rider';
import React, { useState } from 'react';

export default function RiderSelection({
    setSelectedRide,
}: {
    setSelectedRide: (ride: string) => void;
}) {
    const [selectedRider, setSelectedRider] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<'all' | 'yaba' | 'unassigned' | 'assigned'>('assigned');
    const filteredRiders = riders.filter(rider => {
        if (activeTab === 'all') return true;
        if (activeTab === 'yaba') return rider.deliveryArea === 'Yaba';
        if (activeTab === 'unassigned') return rider.deliveries === 0;
        if (activeTab === 'assigned') return rider.deliveries > 0;
        return true;
    });

    const handleSelectRider = (riderId: string) => {
        setSelectedRider(riderId);
    };

    const handleTabChange = (tab: 'all' | 'yaba' | 'unassigned' | 'assigned') => {
        setActiveTab(tab);
    };

    return (
        <div className="w-full max-w-3xl mx-auto p-4">
            <div className="flex mb-4 border-b">
                <button
                    className={`px-4 py-2 ${activeTab === 'all' ? 'border-blue-500 border-b-2 text-blue-500' : 'text-gray-500'}`}
                    onClick={() => handleTabChange('all')}
                >
                    All ({riders.length})
                </button>
                <button
                    className={`px-4 py-2 ${activeTab === 'yaba' ? 'border-blue-500 border-b-2 text-blue-500' : 'text-gray-500'}`}
                    onClick={() => handleTabChange('yaba')}
                >
                    Yaba Riders ({riders.filter(r => r.deliveryArea === 'Yaba').length})
                </button>
                <button
                    className={`px-4 py-2 ${activeTab === 'unassigned' ? 'border-blue-500 border-b-2 text-blue-500' : 'text-gray-500'}`}
                    onClick={() => handleTabChange('unassigned')}
                >
                    Unassigned Riders ({riders.filter(r => r.deliveries === 0).length})
                </button>
                <button
                    className={`px-4 py-2 ${activeTab === 'assigned' ? 'border-blue-500 border-b-2 text-blue-500' : 'text-gray-500'}`}
                    onClick={() => handleTabChange('assigned')}
                >
                    Assigned Riders ({riders.filter(r => r.deliveries > 0).length})
                </button>
            </div>
            <div className="border rounded-md overflow-hidden">
                <div className="max-h-96 overflow-y-auto custom-scrollbar">
                    {filteredRiders.map((rider) => (
                        <div
                            key={rider.id}
                            className={`flex items-center p-3 border-b ${selectedRider === rider.id ? 'bg-blue-100' : 'hover:bg-gray-50'}`}
                            onClick={() => {
                                handleSelectRider(rider.id)
                                setSelectedRide("initial")
                            }
                            }
                        >
                            <div className="flex-shrink-0 mr-4">
                                <div className={`w-5 h-5 rounded-full border ${selectedRider === rider.id ? 'border-blue-500 bg-blue-500' : 'border-gray-300'}`}>
                                    {selectedRider === rider.id && (
                                        <div className="flex items-center justify-center h-full">
                                            <div className="w-2 h-2 rounded-full bg-white"></div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="flex-1 grid grid-cols-3 gap-4">
                                <div>
                                    <div className="text-sm text-gray-500">{"Dispatch Rider's Name"}</div>
                                    <div className="font-medium">{rider.name}</div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500">Delivery Area</div>
                                    <div className="font-medium">{rider.deliveryArea}</div>
                                </div>
                                <div>
                                    <div className="text-sm text-gray-500">Number of Deliveries</div>
                                    <div className="font-medium">{rider.deliveries} {rider.deliveries === 1 ? 'Delivery' : 'Deliveries'}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}