import React from "react";
import { Button } from "@/components/ui/button";

interface PackageAssignmentModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    packageId: string;
    patientName: string;
}

const PackageAssignmentModal: React.FC<PackageAssignmentModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    packageId,
    patientName
}) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
            <div className="bg-white p-8 rounded-none max-w-md w-full">
                <h2 className="text-xl font-semibold mb-6">Assign Package {packageId}</h2>

                <p className="mb-4">
                    Are you sure you want to assign package <span className="font-medium">{packageId}</span> to <span className="font-medium">{patientName}</span>?
                </p>

                <div className="flex gap-4 mt-6">
                    <Button
                        onClick={onClose}
                        className="flex-1 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 py-2 h-12 rounded-none"
                    >
                        No, Go Back
                    </Button>

                    <Button
                        onClick={onConfirm}
                        className="flex-1 bg-[#1F5AF4] hover:bg-blue-600 text-white py-2 h-12 rounded-none"
                    >
                        Yes, Assign Package
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default PackageAssignmentModal;