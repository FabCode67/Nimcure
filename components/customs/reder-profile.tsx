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
        <div className="min-h-screen bg-gray-50 max-w-7xl flex flex-col justify-center mx-auto">
            <div className="container mx-auto pb-8">
                <div className="bg-white  shadow-sm overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-4">
                        <div className="md:col-span-1 border-r border-gray-100">
                            <div className="p-4">
                                <div className="py-3 px-4 text-gray-500 text-sm">Patient</div>
                                <div className="py-3 px-4 bg-blue-50 text-blue-600 font-medium  flex items-center">
                                    Rider&apos;s Profile
                                </div>
                                <div className="py-3 px-4 text-gray-500 text-sm">Delivery History</div>
                            </div>
                        </div>
                        <div className="md:col-span-3 px-12 ">
                            <div className="flex  justify-between w-full  border-b  border-gray-200">
                                <div className="flex items-center gap-8 w-[45%]">
                                    <h3 className="text-gray-700 font-medium">Payment Status</h3>
                                    <div className="bg-green-100 text-green-600 px-4 py-1 text-sm">
                                        Paid
                                    </div>
                                </div>
                                <div className="w-[55%]">
                                    <div className="">
                                        <div className="flex">
                                            <button
                                                className={`py-2 ${activeTab === "patient" ? "text-blue-600 border-b-2 border-blue-600 font-medium" : "text-gray-500"}`}
                                                onClick={() => setActiveTab("patient")}
                                            >
                                                Patient Information
                                            </button>
                                            <button
                                                className={`px-6 py-2 ${activeTab === "delivery" ? "text-blue-600 border-b-2 border-blue-600 font-medium" : "text-gray-500"}`}
                                                onClick={() => setActiveTab("delivery")}
                                            >
                                                Delivery Information
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {activeTab === "patient" && (
                                <div className="flex mt-12">
                                    <div className="items-center w-[45%]  justify-between">
                                        <h2 className="text-xl font-medium text-gray-800">Patient&apos;s Information</h2>
                                        <p className="text-gray-500 text-sm mb-6">Personal information about Patient.</p>
                                        {!isEditing && (
                                            <button
                                                className="flex items-center gap-2 text-blue-600 border border-blue-600  px-4 py-2 mb-8"
                                                onClick={() => setIsEditing(true)}
                                            >
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2 11.5V14H4.5L11.8733 6.62667L9.37333 4.12667L2 11.5ZM13.8067 4.69333C14.0667 4.43333 14.0667 4.01333 13.8067 3.75333L12.2467 2.19333C11.9867 1.93333 11.5667 1.93333 11.3067 2.19333L10.0867 3.41333L12.5867 5.91333L13.8067 4.69333Z" fill="#2563EB" />
                                                </svg>
                                                Edit Patient&apos;s Information
                                            </button>
                                        )}
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[55%]">
                                        <div className="md:col-span-2">
                                            <label className="block text-gray-500 text-sm mb-1">Hospital ID</label>
                                            <Input
                                                type="text"
                                                value={patientData.hospitalId}
                                                onChange={(e) => setPatientData({ ...patientData, hospitalId: e.target.value })}
                                                disabled={!isEditing}
                                                className="w-full p-3 border  bg-gray-50 text-gray-800"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-gray-500 text-sm mb-1">First Name</label>
                                            <Input
                                                type="text"
                                                value={patientData.firstName}
                                                onChange={(e) => setPatientData({ ...patientData, firstName: e.target.value })}
                                                disabled={!isEditing}
                                                className="w-full p-3   bg-gray-50 text-gray-800"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-gray-500 text-sm mb-1">Last Name</label>
                                            <Input
                                                type="text"
                                                value={patientData.lastName}
                                                onChange={(e) => setPatientData({ ...patientData, lastName: e.target.value })}
                                                disabled={!isEditing}
                                                className="w-full p-3   bg-gray-50 text-gray-800"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-500 text-sm mb-1">Gender</label>
                                            {isEditing ? (
                                                <Select
                                                    defaultValue={patientData.gender}
                                                    onValueChange={(value) => setPatientData({ ...patientData, gender: value })}
                                                >
                                                    <SelectTrigger className="w-full p-3 border-gray-600  border h-[60px] py-7 rounded-none  text-gray-800">
                                                        <SelectValue placeholder="Select Gender" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="Male">Male</SelectItem>
                                                        <SelectItem value="Female">Female</SelectItem>
                                                        <SelectItem value="Other">Other</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            ) : (
                                                <div className="relative">
                                                    <Input
                                                        type="text"
                                                        value={patientData.gender}
                                                        disabled
                                                        className="w-full p-3   bg-gray-50 text-gray-800"
                                                    />
                                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8 10L4 6H12L8 10Z" fill="#6B7280" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-gray-500 text-sm mb-1">Phone Number</label>
                                            <Input
                                                type="text"
                                                value={patientData.phoneNumber}
                                                onChange={(e) => setPatientData({ ...patientData, phoneNumber: e.target.value })}
                                                disabled={!isEditing}
                                                className="w-full p-3   bg-gray-50 text-gray-800"
                                            />
                                        </div>

                                        <div className="md:col-span-2">
                                            <label className="block text-gray-500 text-sm mb-1">Email Address</label>
                                            <Input
                                                type="text"
                                                value={patientData.email}
                                                onChange={(e) => setPatientData({ ...patientData, email: e.target.value })}
                                                disabled={!isEditing}
                                                className="w-full p-3   bg-gray-50 text-gray-800"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === "delivery" && (
                                <div className="mt-12">
                                    <div className="mb-8">
                                        <h2 className="text-xl font-medium text-gray-800">Delivery Information</h2>
                                        <p className="text-gray-500 text-sm">Information about delivery status</p>
                                    </div>

                                    <div className="flex">
                                        <div className="w-[45%]">
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

                                        <div className="w-[55%] space-y-6">
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
                                                    className="w-full p-3 bg-gray-50 text-gray-800"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {isEditing && (
                                <div className="flex justify-end mt-8">
                                    <Button
                                        className="bg-blue-100 hover:bg-blue-200 text-blue-600 px-6 py-3"
                                        onClick={() => setIsEditing(false)}
                                    >
                                        Save Changes
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientViewPage;