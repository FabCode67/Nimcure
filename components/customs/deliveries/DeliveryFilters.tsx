import React from 'react';

export default function DeliveryFilters({ activeTab, setActiveTab, activeFilter, setActiveFilter, getCountForStatus }
    : { activeTab: string, setActiveTab: (tab: string) => void, activeFilter: string, setActiveFilter: (filter: string) => void, getCountForStatus: (status: string) => number }
) {
    return (
        <>
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
        </>
    );
}
