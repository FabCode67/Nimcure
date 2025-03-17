'use client'

import { useState, useEffect } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

import deliveries from '@/data/deliveries'
import DashboardLayout from '@/components/layout/DashboardLayout'
import Toast from '@/components/customs/steps/toast'
import AddDeliveries from '@/components/customs/steps/add-deliveries'

export default function DeliveryManagement() {
    const [showToast, setShowToast] = useState(true);
    const [activeTab, setActiveTab] = useState<'unassigned' | 'assigned'>('unassigned');
    const [activeFilter, setActiveFilter] = useState<string>('paid');
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('most-recent');
    const [filteredDeliveries, setFilteredDeliveries] = useState(deliveries);
    useEffect(() => {
        let result = deliveries;
        if (activeTab === 'unassigned') {
            result = result.filter(delivery =>
                delivery.status === 'paid' || delivery.status === 'unpaid');
        } else {
            result = result.filter(delivery =>
                delivery.status === 'pending' || delivery.status === 'successful' || delivery.status === 'failed');
        }

        if (activeFilter && activeFilter !== 'all') {
            result = result.filter(delivery => delivery.status === activeFilter);
        }
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            result = result.filter(delivery => 
                delivery.packageCode.toLowerCase().includes(term) ||
                delivery.patientName.toLowerCase().includes(term) ||
                delivery.phoneNumber.toLowerCase().includes(term) ||
                delivery.location.toLowerCase().includes(term)
            );
        }
        switch (sortOrder) {
            case 'most-recent':
                result = [...result].sort((a, b) => {
                    return new Date(b.deliveryDate).getTime() - new Date(a.deliveryDate).getTime();
                });
                break;
            case 'oldest':
                result = [...result].sort((a, b) => {
                    return new Date(a.deliveryDate).getTime() - new Date(b.deliveryDate).getTime();
                });
                break;
            case 'name-asc':
                result = [...result].sort((a, b) => a.patientName.localeCompare(b.patientName));
                break;
            case 'name-desc':
                result = [...result].sort((a, b) => b.patientName.localeCompare(a.patientName));
                break;
            default:
                break;
        }

        setFilteredDeliveries(result);
    }, [activeTab, activeFilter, searchTerm, sortOrder]);

    const getCountForStatus = (status: string) => {
        return deliveries.filter(delivery => delivery.status === status).length;
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSortChange = (value: string) => {
        setSortOrder(value);
    };

    return (
        <DashboardLayout>
            <AddDeliveries />
            <div className="min-h-screen bg-gray-50 ">
                {showToast && (
                    Toast({ setShowToast })
                )}

                <div className="px-4 py-6 flex flex-col justify-center mx-auto max-w-7xl">
                    <div className="flex w-4/5 ml-auto pl-12 justify-between items-center mb-6">
                        <div className="flex items-center">
                            <span className="mr-2 text-sm text-gray-600">Sort by</span>
                            <Select value={sortOrder} onValueChange={handleSortChange}>
                                <SelectTrigger className="w-40 text-sm">
                                    <SelectValue className='h-12' placeholder="Most Recent" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="most-recent">Most Recent</SelectItem>
                                    <SelectItem value="oldest">Oldest</SelectItem>
                                    <SelectItem value="name-asc">Name A-Z</SelectItem>
                                    <SelectItem value="name-desc">Name Z-A</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search className="h-5 w-5 text-gray-400" />
                                </div>
                                <Input
                                    type="text"
                                    placeholder="Search by package code, name, etc."
                                    className="pl-10 w-64"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="rounded-lg shadow">
                        <div className="flex gap-24 flex-row w-full">
                            <div className="w-1/5 border-r ">
                                <button
                                    className={`py-4 px-6 font-medium ${activeTab === 'unassigned' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                                    onClick={() => { setActiveTab('unassigned'); setActiveFilter('paid'); }}
                                >
                                    Unassigned Deliveries
                                </button>
                                <div>
                                    <div
                                        className={`flex justify-between items-center p-4 cursor-pointer ${activeFilter === 'paid' ? 'bg-blue-50 border-r-4 border-blue-600' : ''}`}
                                        onClick={() => setActiveFilter('paid')}
                                    >
                                        <span className={`${activeFilter === 'paid' ? 'text-blue-600 font-medium' : 'text-gray-600'}`}>Paid</span>
                                        <span className="bg-red-500 text-white rounded-full text-xs w-6 h-6 flex items-center justify-center">
                                            {getCountForStatus('paid')}
                                        </span>
                                    </div>
                                    <div
                                        className={`flex justify-between items-center p-4 cursor-pointer ${activeFilter === 'unpaid' ? 'bg-blue-50 border-r-4 border-blue-600' : ''}`}
                                        onClick={() => setActiveFilter('unpaid')}
                                    >
                                        <span className={`${activeFilter === 'unpaid' ? 'text-blue-600 font-medium' : 'text-gray-600'}`}>Unpaid</span>
                                        <span className="bg-red-500 text-white rounded-full text-xs w-6 h-6 flex items-center justify-center">
                                            {getCountForStatus('unpaid')}
                                        </span>
                                    </div>
                                </div>

                                <button
                                    className={`py-4 px-6 font-medium ${activeTab === 'assigned' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                                    onClick={() => { setActiveTab('assigned'); setActiveFilter('pending'); }}
                                >
                                    Assigned Deliveries
                                </button>
                                <div>
                                    <div
                                        className={`flex justify-between items-center p-4 cursor-pointer ${activeFilter === 'pending' ? 'bg-blue-50 border-r-4 border-blue-600' : ''}`}
                                        onClick={() => setActiveFilter('pending')}
                                    >
                                        <span className={`${activeFilter === 'pending' ? 'text-blue-600 font-medium' : 'text-gray-600'}`}>Pending</span>
                                        <span className="bg-red-500 text-white rounded-full text-xs w-6 h-6 flex items-center justify-center">
                                            {getCountForStatus('pending')}
                                        </span>
                                    </div>
                                    <div
                                        className={`flex justify-between items-center p-4 cursor-pointer ${activeFilter === 'successful' ? 'bg-blue-50 border-r-4 border-blue-600' : ''}`}
                                        onClick={() => setActiveFilter('successful')}
                                    >
                                        <span className={`${activeFilter === 'successful' ? 'text-blue-600 font-medium' : 'text-gray-600'}`}>Successful</span>
                                        <span className="bg-red-500 text-white rounded-full text-xs w-6 h-6 flex items-center justify-center">
                                            {getCountForStatus('successful')}
                                        </span>
                                    </div>
                                    <div
                                        className={`flex justify-between items-center p-4 cursor-pointer ${activeFilter === 'failed' ? 'bg-blue-50 border-r-4 border-blue-600' : ''}`}
                                        onClick={() => setActiveFilter('failed')}
                                    >
                                        <span className={`${activeFilter === 'failed' ? 'text-blue-600 font-medium' : 'text-gray-600'}`}>Failed</span>
                                        <span className="bg-red-500 text-white rounded-full text-xs w-6 h-6 flex items-center justify-center">
                                            {getCountForStatus('failed')}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-4/5">
                                <table className="w-full">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}