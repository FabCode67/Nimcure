import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function MobileSidebar({ isOpen, toggleSidebar, activeTab, setActiveTab, activeFilter, setActiveFilter, getCountForStatus }:
    { isOpen: boolean, toggleSidebar: () => void, activeTab: string, setActiveTab: (tab: string) => void, activeFilter: string, setActiveFilter: (filter: string) => void, getCountForStatus: (status: string) =>
        number }
) {
    return (
        <>
            <div className={`md:hidden fixed inset-y-0 left-0 z-40 w-64 bg-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out overflow-y-auto`}>
                <div className="p-4 border-b">
                    <div className="flex justify-between items-center">
                        <h2 className="font-semibold">Filters</h2>
                        <Button variant="ghost" size="sm" onClick={toggleSidebar}>
                            <ChevronDown className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
                <div className="p-2">
                    <button
                        className={`w-full text-left py-3 px-4 font-medium ${activeTab === 'unassigned' ? 'text-blue-600' : 'text-gray-500'}`}
                        onClick={() => { setActiveTab('unassigned'); setActiveFilter('paid'); toggleSidebar(); }}
                    >
                        Unassigned Deliveries
                    </button>
                    <div className="ml-2">
                        <div
                            className={`flex justify-between items-center p-3 cursor-pointer ${activeFilter === 'paid' ? 'bg-blue-50 border-l-4 border-blue-600' : ''}`}
                            onClick={() => { setActiveFilter('paid'); toggleSidebar(); }}
                        >
                            <span className={`${activeFilter === 'paid' ? 'text-blue-600 font-medium' : 'text-gray-600'}`}>Paid</span>
                            <span className="bg-red-500 text-white rounded-full text-xs w-6 h-6 flex items-center justify-center">
                                {getCountForStatus('paid')}
                            </span>
                        </div>
                        <div
                            className={`flex justify-between items-center p-3 cursor-pointer ${activeFilter === 'unpaid' ? 'bg-blue-50 border-l-4 border-blue-600' : ''}`}
                            onClick={() => { setActiveFilter('unpaid'); toggleSidebar(); }}
                        >
                            <span className={`${activeFilter === 'unpaid' ? 'text-blue-600 font-medium' : 'text-gray-600'}`}>Unpaid</span>
                            <span className="bg-red-500 text-white rounded-full text-xs w-6 h-6 flex items-center justify-center">
                                {getCountForStatus('unpaid')}
                            </span>
                        </div>
                    </div>

                    <button
                        className={`w-full text-left py-3 px-4 font-medium ${activeTab === 'assigned' ? 'text-blue-600' : 'text-gray-500'}`}
                        onClick={() => { setActiveTab('assigned'); setActiveFilter('pending'); toggleSidebar(); }}
                    >
                        Assigned Deliveries
                    </button>
                    <div className="ml-2">
                        <div
                            className={`flex justify-between items-center p-3 cursor-pointer ${activeFilter === 'pending' ? 'bg-blue-50 border-l-4 border-blue-600' : ''}`}
                            onClick={() => { setActiveFilter('pending'); toggleSidebar(); }}
                        >
                            <span className={`${activeFilter === 'pending' ? 'text-blue-600 font-medium' : 'text-gray-600'}`}>Pending</span>
                            <span className="bg-red-500 text-white rounded-full text-xs w-6 h-6 flex items-center justify-center">
                                {getCountForStatus('pending')}
                            </span>
                        </div>
                        <div
                            className={`flex justify-between items-center p-3 cursor-pointer ${activeFilter === 'successful' ? 'bg-blue-50 border-l-4 border-blue-600' : ''}`}
                            onClick={() => { setActiveFilter('successful'); toggleSidebar(); }}
                        >
                            <span className={`${activeFilter === 'successful' ? 'text-blue-600 font-medium' : 'text-gray-600'}`}>Successful</span>
                            <span className="bg-red-500 text-white rounded-full text-xs w-6 h-6 flex items-center justify-center">
                                {getCountForStatus('successful')}
                            </span>
                        </div>
                        <div
                            className={`flex justify-between items-center p-3 cursor-pointer ${activeFilter === 'failed' ? 'bg-blue-50 border-l-4 border-blue-600' : ''}`}
                            onClick={() => { setActiveFilter('failed'); toggleSidebar(); }}
                        >
                            <span className={`${activeFilter === 'failed' ? 'text-blue-600 font-medium' : 'text-gray-600'}`}>Failed</span>
                            <span className="bg-red-500 text-white rounded-full text-xs w-6 h-6 flex items-center justify-center">
                                {getCountForStatus('failed')}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
                    onClick={toggleSidebar}
                />
            )}
        </>
    );
}
