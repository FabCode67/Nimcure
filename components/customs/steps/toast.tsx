import React from 'react'
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Check, X } from "lucide-react"
import { Button } from '@/components/ui/button'
const Toast = (
    { setShowToast}:
    { setShowToast: (value: boolean) => void}
) => {
  return (
    <div className="fixed top-12 left-0 right-0 z-50 p-2 flex flex-col justify-center mx-auto max-w-7xl">
          <Alert className="bg-[#44B07E] text-white flex items-center rounded-none justify-between">
            <div className="flex items-center">
              <Check className="h-5 w-5 mr-2" />
              <AlertDescription className="text-white">
                Package has been successfully assigned to Oluwaseun Aregbesola
              </AlertDescription>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-white h-6 w-6" 
              onClick={() => setShowToast(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </Alert>
        </div>
  )
}

export default Toast