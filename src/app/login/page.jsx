"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ReloadIcon } from "@radix-ui/react-icons";
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Invalid Username, or Password !');

export default function page() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const router = useRouter();

  const { data: session } = useSession();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const { email, password } = form;
    setLoading(true);
    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      setLoading(false);
      if (!response?.error) {
        router.push("/home");
      }

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log("Login Successful", response);
    } catch (error) {
      console.error("Login Failed:", error);
      notify();
    }
  };

  useEffect(() => {
    if (session) {
      router.push("/home");
    }
  }, [session]);

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[350px] dark">
        <CardHeader>
          <CardTitle>Log In</CardTitle>
          <CardDescription>Login to your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>
            </div>
          </form>
          <Button variant="link">
            <Link href={"/register"}>Don't have an account ?</Link>
          </Button>
        </CardContent>
        <CardFooter className="flex justify-between">
          {!loading && (
            <Button variant="" onClick={handleSubmit}>
              Log In
            </Button>
          )}
          {loading && (
            <Button disabled>
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          )}
        </CardFooter>
      </Card>
      {error && (
        <div className="absolute bottom-2 right-2">
          <div
            class="bg-red-100 border border-red-400 text-red-700 px-14 py-3 rounded relative"
            role="alert"
          >
            <strong class="font-bold">Holy smokes!</strong>
            <span class="block sm:inline">
              Something seriously bad happened.
            </span>
            <span
              class="absolute top-0 bottom-0 right-0 px-4 py-3"
              onClick={() => setError(false)}
            >
              <svg
                class="fill-current h-6 w-6 text-red-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </div>
        </div>
      )}
      <Toaster />
    </div>
  );
}
