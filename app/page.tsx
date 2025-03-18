import { LoginForm } from "@/components/ui/login-form"
import Image from "next/image"

export default function LoginPage() {
  return (
    <div className="flex relative min-h-screen w-full">
      <div className="md:w-1/2 w-full">
        <LoginForm />
      </div>
      <div className="hidden md:flex md:w-[43%] justify-end ml-auto bg-[#005DCC] h-screen relative">
       
        <div className="absolute bottom-0 flex flex-col justify-center items-start text-white p-8 transform translate-y-0">
          <h1 className="text-2xl font-bold mb-4">Serving Patients During a Pandemic</h1>
          <p className="text-base text-center">
          Delivering essential medication to NIMR patients with adherence
          </p>
          <p className="text-base text-center">
          to quality of service, care and confidentiality.
          </p>
        </div>
        
        <Image
          src="/loginImage.svg"
          alt="Delivery illustration"
          width={10000}
          height={400}
          className="w-full h-full object-cover"
        />
        <Image
          src="/wing.svg"
          alt="Wing illustration"
          width={300}
          height={300}
          className="absolute left-0 top-[60%] transform -translate-x-[25%] -translate-y-[40%]"
        />
      </div>
    </div>
  )
}