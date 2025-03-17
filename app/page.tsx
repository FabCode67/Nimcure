import { LoginForm } from "@/components/ui/login-form"
import Image from "next/image"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="w-1/2">
        <LoginForm />
      </div>
      <div className="hidden md:block md:w-1/2 bg-[#005DCC] relative h-">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className=" w-full  ">
            <Image
              src="/img.svg"
              alt="Delivery illustration"
              width={10000}
              height={400}
              priority
              className="w-[978px] h-screen  absolute right-6 bottom-0 "
            />
          </div>
        </div>
      </div>
    </div>
  )
}