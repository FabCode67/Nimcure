"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const PatientViewPage = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [activeTab, setActiveTab] = useState("patient");
    const [patientData, setPatientData] = useState({
        hospitalId: "23AB456789",
        firstName: "Oluwaseun",
        lastName: "Aregbesola",
        gender: "Male",
        phoneNumber: "+2348123456789",
        email: "seunregbesola@gmail.com"
    });

    const [deliveryData, setDeliveryData] = useState({
        nextDeliveryDate: "14th November 2020",
        deliveryArea: "Yaba, Lagos",
        deliveryAddress: "19, Mohammed Abiola street, Akoka, Lagos",
        paymentStatus: "Paid"
    });

    return (
        <div className="min-h-screen w-full px-4 sm:px-6 md:px-8 flex flex-col justify-center mx-auto">
            <div className="mx-auto pb-8 w-full max-w-7xl">
                <div className="w-full overflow-hidden">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-8 w-full">
                        {/* Sidebar - Full width on mobile, 20% on desktop */}
                        <div className="bg-white h-fit w-full lg:w-1/5 border-gray-100 mb-6 lg:mb-0">
                            <div className="py-3">
                                <div className="py-3 px-4 text-gray-500 text-sm">Patient</div>
                                <div className="py-3 px-4 bg-blue-50 text-blue-600 border-r-4 border-r-blue-600 font-medium flex items-center">
                                    Rider&apos;s Profile
                                </div>
                                <div className="py-3 px-4 text-gray-500 text-sm">Delivery History</div>
                            </div>
                        </div>

                        {/* Main Content - Full width on mobile, 80% on desktop */}
                        <div className="w-full lg:w-4/5 bg-white py-3">
                            {/* Tab Header */}
                            <div className="flex flex-col sm:flex-row justify-between w-full border-b border-gray-200">
                                <div className="flex px-4 sm:px-8 lg:px-12 items-center gap-4 sm:gap-8 w-full sm:w-auto mb-4 sm:mb-0">
                                    <h3 className="text-gray-700 font-medium">Payment Status</h3>
                                    <div className="bg-green-100 text-green-600 px-4 py-1 text-sm">
                                        Paid
                                    </div>
                                </div>
                                <div className="w-full sm:w-auto px-4 sm:px-8 lg:px-12 overflow-x-auto">
                                    <div className="flex gap-6 sm:gap-12 min-w-max">
                                        <button
                                            className={`py-2 ${activeTab === "patient" ? "text-blue-600 border-b-4 font-bold border-blue-600 " : "text-gray-500"}`}
                                            onClick={() => setActiveTab("patient")}
                                        >
                                            Patient Information
                                        </button>
                                        <button
                                            className={`py-2 ${activeTab === "delivery" ? "text-blue-600 border-b-4 font-bold border-blue-600" : "text-gray-500"}`}
                                            onClick={() => setActiveTab("delivery")}
                                        >
                                            Delivery Information
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Patient Information Tab */}
                            {activeTab === "patient" && (
                                <div className="flex flex-col lg:flex-row px-4 sm:px-8 lg:px-12 mt-8 lg:mt-12">
                                    <div className="w-full lg:w-2/5 mb-6 lg:mb-0">
                                        <h2 className="text-xl font-medium text-gray-800">Patient&apos;s Information</h2>
                                        <p className="text-gray-500 text-sm mb-6">Personal information about Patient.</p>
                                        {!isEditing && (
                                            <button
                                                className="flex items-center gap-2 text-blue-600 border border-blue-600 px-4 py-2 mb-8"
                                                onClick={() => setIsEditing(true)}
                                            >
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2 11.5V14H4.5L11.8733 6.62667L9.37333 4.12667L2 11.5ZM13.8067 4.69333C14.0667 4.43333 14.0667 4.01333 13.8067 3.75333L12.2467 2.19333C11.9867 1.93333 11.5667 1.93333 11.3067 2.19333L10.0867 3.41333L12.5867 5.91333L13.8067 4.69333Z" fill="#2563EB" />
                                                </svg>
                                                Edit Patient&apos;s Information
                                            </button>
                                        )}
                                    </div>
                                    <div className="flex flex-col gap-6 w-full lg:w-3/5">
                                        {isEditing ? (
                                            <>
                                                <div>
                                                    <label className="block text-gray-500 text-sm mb-1">Hospital ID</label>
                                                    <Input
                                                        type="text"
                                                        value={patientData.hospitalId}
                                                        onChange={(e) => setPatientData({ ...patientData, hospitalId: e.target.value })}
                                                        disabled={!isEditing}
                                                        className="w-full p-3 border bg-gray-50 text-gray-800"
                                                    />
                                                </div>
                                                <div className="flex flex-col sm:flex-row gap-6 w-full">
                                                    <div className="w-full sm:w-1/2">
                                                        <label className="block text-gray-500 text-sm mb-1">First Name</label>
                                                        <Input
                                                            type="text"
                                                            value={patientData.firstName}
                                                            onChange={(e) => setPatientData({ ...patientData, firstName: e.target.value })}
                                                            disabled={!isEditing}
                                                            className="w-full p-3 bg-gray-50 text-gray-800"
                                                        />
                                                    </div>

                                                    <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
                                                        <label className="block text-gray-500 text-sm mb-1">Last Name</label>
                                                        <Input
                                                            type="text"
                                                            value={patientData.lastName}
                                                            onChange={(e) => setPatientData({ ...patientData, lastName: e.target.value })}
                                                            disabled={!isEditing}
                                                            className="w-full p-3 bg-gray-50 text-gray-800"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col sm:flex-row gap-6 w-full">
                                                    <div className="w-full sm:w-1/2">
                                                        <label className="block text-gray-500 text-sm mb-1">Gender</label>

                                                        <Select
                                                            defaultValue={patientData.gender}
                                                            onValueChange={(value) => setPatientData({ ...patientData, gender: value })}
                                                        >
                                                            <SelectTrigger className="w-full p-3 border-gray-600 border h-12 sm:h-[60px] py-2 sm:py-7 rounded-none text-gray-800">
                                                                <SelectValue placeholder="Select Gender" />
                                                            </SelectTrigger>
                                                            <SelectContent>
                                                                <SelectItem value="Male">Male</SelectItem>
                                                                <SelectItem value="Female">Female</SelectItem>
                                                                <SelectItem value="Other">Other</SelectItem>
                                                            </SelectContent>
                                                        </Select>
                                                    </div>
                                                    <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
                                                        <label className="block text-gray-500 text-sm mb-1">Phone Number</label>
                                                        <Input
                                                            type="text"
                                                            value={patientData.phoneNumber}
                                                            onChange={(e) => setPatientData({ ...patientData, phoneNumber: e.target.value })}
                                                            disabled={!isEditing}
                                                            className="w-full p-3 bg-gray-50 text-gray-800"
                                                        />
                                                    </div>
                                                </div>

                                                <div>
                                                    <label className="block text-gray-500 text-sm mb-1">Email Address</label>
                                                    <Input
                                                        type="text"
                                                        value={patientData.email}
                                                        onChange={(e) => setPatientData({ ...patientData, email: e.target.value })}
                                                        disabled={!isEditing}
                                                        className="w-full p-3 bg-gray-50 text-gray-800"
                                                    />
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="flex flex-col border-[#808080] bg-[#EFEFEF] py-[6px] px-3 border w-full">
                                                    <p className="text-gray-500 text-sm mb-1">Hospital ID</p>
                                                    <p className="text-gray-800 font-medium">{patientData.hospitalId}</p>
                                                </div>
                                                <div className="flex flex-col sm:flex-row gap-6">
                                                    <div className="flex flex-col border-[#808080] bg-[#EFEFEF] py-[6px] px-3 border w-full mb-4 sm:mb-0">
                                                        <p className="text-gray-500 text-sm mb-1">First Name</p>
                                                        <p className="text-gray-800 font-medium">{patientData.firstName}</p>
                                                    </div>
                                                    <div className="flex flex-col border-[#808080] bg-[#EFEFEF] py-[6px] px-3 border w-full">
                                                        <p className="text-gray-500 text-sm mb-1">Last Name</p>
                                                        <p className="text-gray-800 font-medium">{patientData.lastName}</p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col sm:flex-row gap-6">
                                                    <div className="flex flex-col border-[#808080] bg-[#EFEFEF] py-[6px] px-3 border w-full mb-4 sm:mb-0">
                                                        <p className="text-gray-500 text-sm mb-1">Gender</p>
                                                        <p className="text-gray-800 font-medium">{patientData.gender}</p>
                                                    </div>
                                                    <div className="flex flex-col border-[#808080] bg-[#EFEFEF] py-[6px] px-3 border w-full">
                                                        <p className="text-gray-500 text-sm mb-1">Phone Number</p>
                                                        <p className="text-gray-800 font-medium">{patientData.phoneNumber}</p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col border-[#808080] bg-[#EFEFEF] py-[6px] px-3 border w-full">
                                                    <p className="text-gray-500 text-sm mb-1">Email</p>
                                                    <p className="text-gray-800 font-medium">{patientData.email}</p>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Delivery Information Tab */}
                            {activeTab === "delivery" && (
                                <div className="mt-8 lg:mt-12 px-4 sm:px-8 lg:px-12">
                                    <div className="mb-8">
                                        <h2 className="text-xl font-medium text-gray-800">Delivery Information</h2>
                                        <p className="text-gray-500 text-sm">Information about delivery status</p>
                                    </div>

                                    <div className="flex flex-col lg:flex-row">
                                        <div className="w-full lg:w-2/5 mb-6 lg:mb-0">
                                            <button
                                                className="flex items-center gap-2 text-blue-600 border border-blue-600 px-4 py-2 mb-8"
                                                onClick={() => setIsEditing(true)}
                                            >
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2 11.5V14H4.5L11.8733 6.62667L9.37333 4.12667L2 11.5ZM13.8067 4.69333C14.0667 4.43333 14.0667 4.01333 13.8067 3.75333L12.2467 2.19333C11.9867 1.93333 11.5667 1.93333 11.3067 2.19333L10.0867 3.41333L12.5867 5.91333L13.8067 4.69333Z" fill="#2563EB" />
                                                </svg>
                                                Edit Delivery Information
                                            </button>
                                        </div>
                                        {isEditing ? (
                                            <div className="w-full lg:w-3/5 space-y-6">
                                                <div>
                                                    <label className="block text-gray-500 text-sm mb-1">Next Delivery Date</label>
                                                    <Input
                                                        type="text"
                                                        value={deliveryData.nextDeliveryDate}
                                                        onChange={(e) => setDeliveryData({ ...deliveryData, nextDeliveryDate: e.target.value })}
                                                        disabled={!isEditing}
                                                        className="w-full p-3 bg-gray-50 text-gray-800"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-gray-500 text-sm mb-1">Delivery Area</label>
                                                    <Input
                                                        type="text"
                                                        value={deliveryData.deliveryArea}
                                                        onChange={(e) => setDeliveryData({ ...deliveryData, deliveryArea: e.target.value })}
                                                        disabled={!isEditing}
                                                        className="w-full p-3 bg-gray-50 text-gray-800"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-gray-500 text-sm mb-1">Delivery Address</label>
                                                    <Input
                                                        type="text"
                                                        value={deliveryData.deliveryAddress}
                                                        onChange={(e) => setDeliveryData({ ...deliveryData, deliveryAddress: e.target.value })}
                                                        disabled={!isEditing}
                                                        className="w-full p-3 bg-gray-50 text-gray-800"
                                                    />
                                                </div>

                                                <div>
                                                    <label className="block text-gray-500 text-sm mb-1">Payment Status</label>
                                                    <Input
                                                        type="text"
                                                        value={deliveryData.paymentStatus}
                                                        onChange={(e) => setDeliveryData({ ...deliveryData, paymentStatus: e.target.value })}
                                                        disabled={!isEditing}
                                                        className="w-full sm:w-1/2 p-3 bg-gray-50 text-gray-800"
                                                    />
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="w-full lg:w-3/5 space-y-6">
                                                <div className="flex flex-col border-[#808080] bg-[#EFEFEF] py-[6px] px-3 border w-full">
                                                    <p className="text-gray-500 text-sm mb-1">Next Delivery Date</p>
                                                    <p className="text-gray-800 font-medium">{deliveryData.nextDeliveryDate}</p>
                                                </div>
                                                <div className="flex flex-col border-[#808080] bg-[#EFEFEF] py-[6px] px-3 border w-full">
                                                    <p className="text-gray-500 text-sm mb-1">Delivery Area</p>
                                                    <p className="text-gray-800 font-medium">{deliveryData.deliveryArea}</p>
                                                </div>
                                                <div className="flex flex-col border-[#808080] bg-[#EFEFEF] py-[6px] px-3 border w-full">
                                                    <p className="text-gray-500 text-sm mb-1">Delivery Address</p>
                                                    <p className="text-gray-800 font-medium">{deliveryData.deliveryAddress}</p>
                                                </div>
                                                <div className="flex flex-col border-[#808080] bg-[#EFEFEF] py-[6px] px-3 border w-full sm:w-1/2">
                                                    <p className="text-gray-500 text-sm mb-1">Payment Status</p>
                                                    <p className="text-gray-800 font-medium">{deliveryData.paymentStatus}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* Save Button */}
                            <div className="flex px-4 sm:px-12 lg:px-24 justify-end border-t border-t-gray-400 mt-8">
                                <Button
                                    className="bg-blue-100 mt-2 hover:bg-blue-200 h-12 sm:h-[60px] rounded-none text-blue-600 px-6 py-3"
                                    onClick={() => setIsEditing(false)}
                                    disabled={!isEditing}
                                >
                                    Save Changes
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientViewPage;