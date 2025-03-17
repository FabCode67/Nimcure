"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import PatientPackagesHeader from "@/components/customs/package-header";
import PatientInfoCard from "@/components/customs/patient-info-card";
import StepOne from "@/components/customs/steps/step-one";
import RiderSelection from "@/components/customs/steps/step-two";
import StepThree from "@/components/customs/steps/step-three";
import PackageAssignmentModal from "@/components/customs/package-assinment-modal";

export default function AssignPackageToPatient() {
    const [step, setStep] = useState<number>(1); // 1: Set Drug Cycle, 2: Assign Rider, 3: Scan Package
    const [selectedRider, setSelectedRider] = useState<string | null>(null);
    const [scannedPackages, setScannedPackages] = useState<string[]>([]);
    const [cycleOption, setCycleOption] = useState<string | null>(null);
    const [newCycleSelected, setNewCycleSelected] = useState<boolean>(false);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    
    // Assume the first scanned package is the one we're confirming
    const currentPackageId = scannedPackages.length > 0 ? scannedPackages[0] : "5673AD";
    const patientName = "Oluwaseun Aregbesola"; // This should come from your patient data

    const handleNext = () => {
        if (step < 3) {
            setStep(step + 1);
        }
    };

    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const handleStepClick = (stepNumber: number) => {
        if (stepNumber <= step) {
            setStep(stepNumber);
        }
    };
    
    const handleCompleteClick = () => {
        setIsModalOpen(true);
    };
    
    const handleConfirmAssignment = () => {
        setIsModalOpen(false);
        // Here you would handle the API call to complete the assignment
        alert("Package assignment completed successfully!");
        // Optionally redirect to another page or reset the form
    };

    return (
        <DashboardLayout>
            <div className="bg-slate-50 min-h-screen">
                <PatientPackagesHeader />
                <div className="flex mx-auto max-w-7xl p-8 justify-center">
                    <PatientInfoCard />
                    <div className="flex flex-col w-[65%]">
                        {/* Stepper section with accurate styling */}
                        <div className="flex justify-between mb-6">
                            {/* Step 1 */}
                            <div
                                className="flex items-center gap-2 cursor-pointer"
                                onClick={() => handleStepClick(1)}
                            >
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${step > 1 ? "bg-green-500 text-white" :
                                        step === 1 ? "border-2 border-blue-500" : "border-2 border-gray-300"
                                    }`}>
                                    {step > 1 ? (
                                        <Check size={14} />
                                    ) : step === 1 ? (
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                    ) : null}
                                </div>
                                <span className={`font-medium ${step > 1 ? "text-green-500" :
                                        step === 1 ? "text-blue-500" : "text-gray-500"
                                    }`}>Set Drug Cycle/Length</span>
                                {step === 1 && <div className="h-1 w-full bg-blue-500 mt-2 absolute top-14 left-0"></div>}
                            </div>

                            {/* Step 2 */}
                            <div
                                className="flex items-center gap-2 cursor-pointer"
                                onClick={() => handleStepClick(2)}
                            >
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${step > 2 ? "bg-green-500 text-white" :
                                        step === 2 ? "border-2 border-blue-500" : "border-2 border-gray-300"
                                    }`}>
                                    {step > 2 ? (
                                        <Check size={14} />
                                    ) : step === 2 ? (
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                    ) : null}
                                </div>
                                <span className={`font-medium ${step > 2 ? "text-green-500" :
                                        step === 2 ? "text-blue-500" : "text-gray-500"
                                    }`}>Assign Dispatch Rider</span>
                                {step === 2 && <div className="h-1 w-full bg-blue-500 mt-2 absolute top-14 left-0"></div>}
                            </div>

                            {/* Step 3 */}
                            <div
                                className="flex items-center gap-2 cursor-pointer"
                                onClick={() => handleStepClick(3)}
                            >
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${step > 3 ? "bg-green-500 text-white" :
                                        step === 3 ? "border-2 border-blue-500" : "border-2 border-gray-300"
                                    }`}>
                                    {step > 3 ? (
                                        <Check size={14} />
                                    ) : step === 3 ? (
                                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                    ) : null}
                                </div>
                                <span className={`font-medium ${step > 3 ? "text-green-500" :
                                        step === 3 ? "text-blue-500" : "text-gray-500"
                                    }`}>Scan Package</span>
                                {step === 3 && <div className="h-1 w-full bg-blue-500 mt-2 absolute top-14 left-0"></div>}
                            </div>
                        </div>
                        
                        {step === 1 && (
                            <StepOne
                                cycleOption={cycleOption}
                                setCycleOption={setCycleOption}
                                newCycleSelected={newCycleSelected}
                                setNewCycleSelected={setNewCycleSelected}
                            />
                        )}

                        {step === 2 && (
                            <RiderSelection setSelectedRide={setSelectedRider} />
                        )}

                        {/* Step 3: Scan Package */}
                        {step === 3 && (
                           <StepThree
                                scannedPackages={scannedPackages}
                                setScannedPackages={setScannedPackages} 
                                patientName={patientName} />
                        )}

                        {/* Navigation buttons */}
                        <div className="flex justify-between mt-8">
                            {step > 1 ? (
                                <Button
                                    onClick={handleBack}
                                    className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-2 h-[60px] rounded-none"
                                >
                                    Back
                                </Button>
                            ) : (
                                <div></div> // Empty div to maintain flex layout
                            )}

                            <Button
                                onClick={() => {
                                    if (step === 3) {
                                        handleCompleteClick();
                                    } else {
                                        handleNext();
                                    }
                                }}
                                className="bg-[#1F5AF4] hover:bg-blue-600 text-white px-8 py-2 h-[60px] rounded-none"
                                disabled={(step === 1 && !cycleOption) ||
                                    (step === 2 && !selectedRider) ||
                                    (step === 3 && scannedPackages.length === 0)}
                            >
                                {step === 3 ? "Complete" : step === 2 ? "Assign Package": "Next"}
                            </Button>
                        </div>
                    </div>
                </div>
                <PackageAssignmentModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={handleConfirmAssignment}
                packageId={currentPackageId}
                patientName={patientName}
            />
            </div>
            
          
           
        </DashboardLayout>
    );
}