import { Input } from "@/components/ui/input";
import { Pencil } from "lucide-react";

interface DeliveryInterface {
    nextDeliveryDate: string;
    deliveryArea: string;
    deliveryAddress: string;
    paymentStatus: string;
}

const DeliveryInformation = ({ isEditing, setIsEditing, deliveryData, setDeliveryData }
    : { isEditing: boolean, setIsEditing: (value: boolean) => void, deliveryData: DeliveryInterface, setDeliveryData: (value: DeliveryInterface) => void }
) => {
    return (
        <div className="mt-8 flex lg:flex-row flex-col lg:mt-12 px-4 sm:px-4 lg:px-12">
            <div className="flex flex-col">
            <div className="mb-8">
                <h2 className="text-xl font-medium text-gray-800">Delivery Information</h2>
                <p className="text-gray-500 text-sm">Information about delivery status</p>
            </div>

                <div className="w-full lg:w-full mb-6 lg:mb-0">
                    <button
                        className="flex items-center gap-2 text-blue-600 border border-blue-600 px-2 py-2 mb-8"
                        onClick={() => setIsEditing(true)}
                    >
                        <Pencil size={16} />
                        Edit Delivery Information
                    </button>
                </div>
                </div>
                <div className="flex flex-col justify-end ml-auto lg:pr-16 pr-0 lg:flex-row w-full lg:w-3/5">
                {isEditing ? (
                    <div className=" w-full  space-y-6">
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
                    <div className="w-full space-y-6">
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
    );
};

export default DeliveryInformation;