'use client'

import { useState, useEffect } from 'react'
import { Search, Menu } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import deliveries from '@/data/deliveries'
import DashboardLayout from '@/components/layout/DashboardLayout'
import Toast from '@/components/customs/steps/toast'
import AddDeliveries from '@/components/customs/steps/add-deliveries'
import SortSelector from '@/components/customs/deliveries/SortSelector'
import DeliveryFilters from '@/components/customs/deliveries/DeliveryFilters'
import DeliveryTable from '@/components/customs/deliveries/DeliveryTable'
import MobileDeliveryCards from '@/components/customs/deliveries/MobileDeliveryCards'
import MobileSidebar from '@/components/customs/deliveries/MobileSidebar'

export default function DeliveryManagement() {
    const [showToast, setShowToast] = useState(true);
    const [activeTab, setActiveTab] = useState('unassigned');
    const [activeFilter, setActiveFilter] = useState('paid');
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('most-recent');
    const [filteredDeliveries, setFilteredDeliveries] = useState(deliveries);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [expandedRows, setExpandedRows] = useState<{ [key: string]: boolean }>({});

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

    const toggleRowExpand = (id: string) => {
        setExpandedRows(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <DashboardLayout>
            <AddDeliveries />
            <div className="min-h-screen bg-gray-50">
                {showToast && (
                    <Toast setShowToast={setShowToast} />
                )}

                <div className="px-2 md:px-4 py-4 md:py-6 flex flex-col justify-center mx-auto max-w-7xl">
                    {/* Mobile sidebar toggle */}
                    <div className="md:hidden flex justify-between items-center mb-4">
                        <Button variant="outline" onClick={toggleSidebar} className="flex items-center">
                            <Menu className="h-5 w-5 mr-2" />
                            Filters
                        </Button>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-4 w-4 text-gray-400" />
                            </div>
                            <Input
                                type="text"
                                placeholder="Search"
                                className="pl-10 w-40"
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                        </div>
                    </div>

                    {/* Desktop sorting and search */}
                    <div className="hidden md:flex md:w-4/5 md:ml-auto md:pl-6 lg:pl-12 justify-between items-center mb-6">
                        <SortSelector sortOrder={sortOrder} onSortChange={handleSortChange} />
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

                    {/* Mobile sorting controls */}
                    <div className="md:hidden flex justify-between items-center mb-4">
                        <SortSelector sortOrder={sortOrder} onSortChange={handleSortChange} isMobile={true} />
                    </div>

                    <div className="rounded-lg gap-12 flex flex-col md:flex-row w-full">
                        {/* Mobile sidebar */}
                        <MobileSidebar 
                            isOpen={sidebarOpen}
                            toggleSidebar={toggleSidebar}
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                            activeFilter={activeFilter}
                            setActiveFilter={setActiveFilter}
                            getCountForStatus={getCountForStatus}
                        />
                        
                        {/* Desktop sidebar */}
                        <div className="hidden md:block w-1/5">
                            <DeliveryFilters 
                                activeTab={activeTab}
                                setActiveTab={setActiveTab}
                                activeFilter={activeFilter}
                                setActiveFilter={setActiveFilter}
                                getCountForStatus={getCountForStatus}
                            />
                        </div>

                        {/* Table container */}
                        <div className="w-full md:w-4/5 overflow-x-auto">
                            {/* Desktop table */}
                            <DeliveryTable 
                                filteredDeliveries={filteredDeliveries}
                            />

                            {/* Mobile card view */}
                            <MobileDeliveryCards 
                                filteredDeliveries={filteredDeliveries}
                                expandedRows={expandedRows}
                                toggleRowExpand={toggleRowExpand}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
}