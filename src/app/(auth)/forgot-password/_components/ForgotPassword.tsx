"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

type ForgotPassword = {
  email: string;
};

const formSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
});

function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = (data: ForgotPassword ) => {
    setIsLoading(true);
    console.log("OTP sending to:", data.email);

    setTimeout(() => {
      setIsLoading(false);
      toast.success("OTP sent successfully!", {
        description: `An OTP has been sent to ${data.email}`,
        position: "bottom-right",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-sm">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl font-semibold text-green-700">
            Forgot Password
          </CardTitle>
          <CardDescription className="text-sm">
            Enter your email to recover your password
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="hello@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-green-700 hover:bg-green-800"
              >
                {isLoading ? "Sending OTP..." : "Send OTP"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default ForgotPassword;
