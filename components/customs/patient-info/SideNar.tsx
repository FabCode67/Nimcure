const SideNav = () => {
    return (
        <div className="bg-white h-fit w-full lg:w-[15%] border-gray-100 mb-6 lg:mb-0">
            <div className="py-3">
                <div className="py-3 px-4 text-gray-500 text-sm">Patient</div>
                <div className="py-3 px-4 bg-blue-50 text-blue-600 border-r-4 border-r-blue-600 font-medium flex items-center">
                    Rider&apos;s Profile
                </div>
                <div className="py-3 px-4 text-gray-500 text-sm">Delivery History</div>
            </div>
        </div>
    );
};

export default SideNav;