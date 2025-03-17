import { LoginForm } from "@/components/ui/login-form"
import Image from "next/image"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full">
      <div className="md:w-1/2 w-full">
        <LoginForm />
      </div>
      <div className="hidden md:flex md:w-[43%] justify-end ml-auto   bg-[#005DCC] h-screen">
        <Image
          src="/loginImage.svg"
          alt="Delivery illustration"
          width={10000}
          height={400}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}