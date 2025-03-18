import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const PatientHeader = () => {
    const route = useRouter();
    return (
        <div className="w-full border-b py-6 md:px-0 px-2 border-gray-200">
            <div className="flex flex-row items-center px-4 justify-between max-w-7xl mx-auto">
                <div className="flex items-center ">
                    <Link href="/dashboard/patients" className="text-blue-500 hover:underline text-sm">
                        Patient
                    </Link>
                    <span className="md:mx-2 mx-1 md:block hidden text-gray-500">/</span>
                    <span className="text-gray-800 md:block hidden">View Patient</span>
                </div>
                <div className="flex flex-row md:items-center gap-2 md:gap-4">
                    <div className="text-sm md:block hidden text-gray-500">
                        <p>Patient&apos;s next delivery date is</p>
                        <p>14th November 2020, in 2 days</p>
                    </div>
                    <Button 
                        onClick={() => route.push("/dashboard/patients/1/assign-package")}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium w-fit rounded-none h-[60px]">
                        Assign Package to Patient
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default PatientHeader;