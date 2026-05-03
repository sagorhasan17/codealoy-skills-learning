"use client";

import {
  Button,
  Card,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-linear-to-br from-slate-900 via-slate-950 to-black">
      <Card className="w-full max-w-md p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-black/30">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Welcome Back </h1>
          <p className="text-gray-400 text-sm mt-2">
            Login to continue your journey
          </p>
        </div>

        <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email";
              }
              return null;
            }}
          >
            <Label className="text-gray-300">Email</Label>
            <Input
              placeholder="john@example.com"
              className="rounded-xl bg-white/10 text-white placeholder:text-gray-400 border border-white/10 focus:border-[#5271FF]"
            />
            <FieldError />
          </TextField>

          <TextField isRequired name="password" type="password">
            <Label className="text-gray-300">Password</Label>
            <Input
              placeholder="Enter your password"
              className="rounded-xl bg-white/10 text-white placeholder:text-gray-400 border border-white/10 focus:border-[#5271FF]"
            />
            <FieldError />
          </TextField>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer text-gray-400">
              <input type="checkbox" className="accent-[#5271FF]" />
              Remember me
            </label>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#5271FF] hover:bg-[#3f5ce0] text-white font-medium mt-2 rounded-xl shadow-lg shadow-[#5271FF]/30"
          >
            Login
          </Button>
        </Form>
        {/* Google Login */}
        <Button
          variant="bordered"
          className="w-full bg-white text-black hover:bg-gray-200 rounded-xl font-medium flex items-center justify-center gap-2"
        >
          <FaGoogle /> Continue with Google
        </Button>

        <p className="text-center text-sm text-gray-400 mt-6">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-[#5271FF] hover:underline">
            Sign Up
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default LoginPage;
