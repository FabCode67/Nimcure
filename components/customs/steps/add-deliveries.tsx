import React from 'react'
import { Button } from "@/components/ui/button";
import { PlusIcon } from 'lucide-react';


const AddDeliveries = () => {
  return (
    <div className="w-full border-b py-8 border-gray-200">
    <div className="flex items-center mx-auto max-w-7xl w-full justify-center">
      <div className="flex justify-between w-full">
        <h1 className="text-2xl font-bold">Deliveries</h1>
        <Button className="bg-blue-600 hover:bg-blue-700 h-[50px] rounded-none">
          <PlusIcon className="h-4 w-4 mr-2" />
          Add Deliveries
        </Button>
      </div>
    </div>
  </div>

  )
}

export default AddDeliveries