import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Pencil } from "lucide-react";


interface PatientInterface {
    hospitalId: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    gender: string;
    
}
const PatientInformation = ({ isEditing, setIsEditing, patientData, setPatientData }
    : { isEditing: boolean, setIsEditing: (value: boolean) => void, patientData: PatientInterface, setPatientData: (value: PatientInterface) => void }
) => {
    return (
        <div className="flex flex-col lg:flex-row px-4 sm:px-8 lg:px-12 mt-8 lg:mt-12">
            <div className="w-full lg:w-2/5 mb-6 lg:mb-0">
                <h2 className="text-xl font-medium text-gray-800">Patient&apos;s Information</h2>
                <p className="text-gray-500 text-sm mb-6">Personal information about Patient.</p>
                {!isEditing && (
                    <button
                        className="flex items-center gap-2 text-blue-600 border border-blue-600 px-2 py-2 mb-8"
                        onClick={() => setIsEditing(true)}
                    >
                        <Pencil size={16} />
                        Edit Patient&apos;s Information
                    </button>
                )}
            </div>
            <div className="flex flex-col gap-6 w-full lg:pr-16 pr-0 lg:w-3/5">
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
    );
};

export default PatientInformation;