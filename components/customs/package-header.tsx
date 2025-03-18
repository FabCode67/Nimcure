import Link from "next/link";

const PatientPackagesHeader = () => {
    return (
        <div className="w-full border-b py-8 border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between max-w-7xl px-5 justify-center mx-auto">
                <div className="flex items-center ">
                    <Link href="/dashboard/patients" className="text-blue-500 hover:underline text-sm">
                        Patients
                    </Link>
                    <span className="md:mx-2 mx-1 text-gray-500">/</span>
                    <Link href="/dashboard/patients/1" className="text-blue-500 hover:underline text-sm">
                        View Patient
                    </Link>
                    <span className="md:mx-2 mx-1 text-gray-500">/</span>
                    <span className="text-gray-800"> Assign Package to Patient</span>
                </div>

            </div>
        </div>
    );
};

export default PatientPackagesHeader;