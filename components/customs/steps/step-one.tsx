import React from 'react'

const StepOne = (
    { cycleOption, setCycleOption, setNewCycleSelected }:
        { cycleOption: string | null, setCycleOption: (value: string) => void, newCycleSelected: boolean, setNewCycleSelected: (value: boolean) => void }
) => {

    return (
        <div className="bg-white overflow-hidden mt-4">
            <div className="p-4">
                <p className="text-gray-700 mb-4">Oluwaseun Aregbesola has a drug cycle of two(2) months</p>
                <div
                    className={`border mb-4 overflow-hidden ${cycleOption === 'initial' ? 'border-blue-500' : ''}`}
                    onClick={() => {
                        setCycleOption('initial');
                        setNewCycleSelected(false);
                    }}
                >
                    <div className="flex items-center p-4 cursor-pointer">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${cycleOption === 'initial'
                                ? 'border-2 border-blue-500'
                                : 'border-2 border-gray-300'
                            }`}>
                            {cycleOption === 'initial' && (
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            )}
                        </div>
                        <span className={`font-medium ${cycleOption === 'initial' ? 'text-blue-500' : 'text-gray-700'}`}>
                            Same as initial drug cycle
                        </span>
                    </div>

                    {cycleOption === 'initial' && (
                        <div className="bg-gray-50 p-4 border-t">
                            <p className="text-gray-700">
                                Deliver drug on <strong>4th February 2020</strong> & set next delivery date to <strong>4th March 2020</strong>
                            </p>
                        </div>
                    )}
                </div>
                <div
                    className={`border rounded-md ${cycleOption === 'new' ? 'border-blue-500' : ''}`}
                    onClick={() => {
                        setCycleOption('new');
                        setNewCycleSelected(true);
                    }}
                >
                    <div className="flex items-center p-4 cursor-pointer">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${cycleOption === 'new'
                                ? 'border-2 border-blue-500'
                                : 'border-2 border-gray-300'
                            }`}>
                            {cycleOption === 'new' && (
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                            )}
                        </div>
                        <span className={`font-medium ${cycleOption === 'new' ? 'text-blue-500' : 'text-gray-700'}`}>
                            Set new drug cycle
                        </span>
                    </div>

                    {cycleOption === 'new' && (
                        <div className="bg-gray-50 p-4 border-t">
                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Cycle Start Date
                                    </label>
                                    <input
                                        type="date"
                                        defaultValue={new Date().toISOString().split('T')[0]}
                                        className="w-full p-2 border rounded-md"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Cycle Length (Days)
                                    </label>
                                    <select
                                        defaultValue="30"
                                        className="w-full p-2 border rounded-md"
                                    >
                                        <option value="7">7 days</option>
                                        <option value="14">14 days</option>
                                        <option value="30">30 days</option>
                                        <option value="60">60 days</option>
                                        <option value="90">90 days</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mt-4 p-4 bg-blue-50 rounded-md border border-blue-100">
                                <h3 className="text-sm font-medium text-blue-800">Cycle Summary</h3>
                                <p className="mt-2 text-sm text-blue-600">
                                    This medication cycle will start on {new Date().toLocaleDateString()} and will last for 30 days.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default StepOne