import Link from "next/link";
import { Button } from "../ui/button";

const PatientHeader = () => {
    return (
        <div className="w-full border-b py-8 border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between max-w-7xl justify-center mx-auto">
                <div className="flex items-center ">
                    <Link href="/patients" className="text-blue-500 hover:underline text-sm">
                        Patients
                    </Link>
                    <span className="mx-2 text-gray-500">/</span>
                    <span className="text-gray-800">View Patient</span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                    <div className="text-sm text-gray-500">
                        <p>Patient&apos;s next delivery date is</p>
                        <p>14th November 2020, in 2 days</p>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium">
                        Assign Package to Patient
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default PatientHeader;