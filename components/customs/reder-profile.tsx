"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import SideNav from "./patient-info/SideNar";
import PatientInformation from "./patient-info/PatientInformation";
import DeliveryInformation from "./patient-info/DeliveryInformation";

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
        <div className="min-h-screen max-w-7xl px-4 sm:px-6 md:px-8 flex flex-col justify-center mx-auto">
            <div className="mx-auto pb-8 w-full max-w-7xl">
                <div className="w-full overflow-hidden">
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-8 w-full">
                        <SideNav />
                        <div className="w-full lg:w-[85%] pb-3">
                            <div className="flex flex-col sm:flex-row justify-between w-full border-b border-gray-200">
                                <div className="flex px-4 lg:w-[40%] sm:px-8 lg:px-12 items-center gap-4 sm:gap-8 w-full sm:w-auto mb-4 sm:mb-0">
                                    <h3 className="text-gray-700 font-medium">Payment Status</h3>
                                    <div className="bg-green-100 text-green-600 px-4 py-1 text-sm">
                                        Paid
                                    </div>
                                </div>
                                <div className="w-full justify-center mr-auto  flex flex-col sm:w-auto overflow-x-auto px-2">
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
                            
                            {activeTab === "patient" && (
                                <PatientInformation 
                                    isEditing={isEditing} 
                                    setIsEditing={setIsEditing} 
                                    patientData={patientData} 
                                    setPatientData={setPatientData} 
                                />
                            )}
                            
                            {activeTab === "delivery" && (
                                <DeliveryInformation 
                                    isEditing={isEditing} 
                                    setIsEditing={setIsEditing} 
                                    deliveryData={deliveryData} 
                                    setDeliveryData={setDeliveryData} 
                                />
                            )}
                            
                            <div className="flex px-4 sm:px-12 lg:px-28 justify-end border-t border-t-gray-400 mt-8">
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