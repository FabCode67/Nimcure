"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  rememberMe: z.boolean().default(false),
});

type LoginFormProps = {
  logo?: string;
  onSubmit?: (values: z.infer<typeof formSchema>) => void;
  redirectUrl?: string;
};

export function LoginForm({
  onSubmit,
  redirectUrl = "/dashboard/patients",
}: LoginFormProps) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    if (onSubmit) {
      onSubmit(values);
    } else {
      console.log("Form submitted:", values);
      router.push(redirectUrl);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      <div className="flex  justify-center p-4 mt-8">
        <Image src="/uplogo.png" alt="Logo" width={58} height={58} priority />
      </div>
      <div className="flex-1 flex items-center justify-center w-[340px] mx-auto">
        <div className="w-full">
          <h1 className="text-xl font-medium text-start mb-6">
            Sign in to continue
          </h1>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Email Address" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="Password"
                          type={showPassword ? "text" : "password"}
                          {...field}
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-blue-600"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? "HIDE" : "SHOW"}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center justify-between">
                <FormField
                  control={form.control}
                  name="rememberMe"
                  render={({ field }) => (
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="rememberMe"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <label
                        htmlFor="rememberMe"
                        className="text-sm font-medium cursor-pointer"
                      >
                        Remember Me
                      </label>
                    </div>
                  )}
                />

                <Link href="/" className="text-sm text-blue-600">
                  Forgot Password?
                </Link>
              </div>

              <Button type="submit" className="w-full h-12 mt-12 rounded cursor-pointer bg-blue-600 text-white hover:bg-blue-700">
                Login
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <div className="text-xs text-center flex justify-center mx-auto text-gray-500 mt-auto p-4">
        <p>Powered by</p>
        <div className="flex justify-center ml-3">
          <Image src="/logo.png" alt="Co-Creation Hub" objectFit="cover" width={80} height={25} />
        </div>
      </div>
    </div>
  );
}
