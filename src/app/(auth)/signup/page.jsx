"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    const { name, email, password, profilePhoto } = userData;

    const { data, error } = await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password, // required
      image: profilePhoto,
      callbackURL: "/",
    });
    if (!error) {
      toast.success("Registration successful!", {
        autoClose: 2000,
        position: "top-center",
      });
      router.push("/signin");
    } else {
      toast.error("Registration error:", {
        autoClose: 2000,
        position: "top-center",
      });
    }
  };
  const handleGoogleLogin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-linear-to-br from-slate-900 via-slate-950 to-black">
      <Card className="w-full max-w-md p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl shadow-black/30">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">Create Account</h1>
          <p className="text-gray-400 text-sm mt-2">
            Start your journey with CodeAloy
          </p>
        </div>

        <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
          <TextField isRequired name="name">
            <Label className="text-gray-300">Full Name</Label>
            <Input
              placeholder="Enter your full name"
              className="rounded-xl bg-white/10 text-white placeholder:text-gray-400 border border-white/10 focus:border-[#5271FF]"
            />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Enter a valid email";
              }
              return null;
            }}
          >
            <Label className="text-gray-300">Email</Label>
            <Input
              placeholder="Enter your email"
              className="rounded-xl bg-white/10 text-white placeholder:text-gray-400 border border-white/10 focus:border-[#5271FF]"
            />
            <FieldError />
          </TextField>
          <TextField isRequired name="profilePhoto">
            <Label className="text-gray-300">Profile Photo URL</Label>
            <Input
              placeholder="Enter profile photo URL"
              className="rounded-xl bg-white/10 text-white placeholder:text-gray-400 border border-white/10 focus:border-[#5271FF]"
            />
            <FieldError />
          </TextField>

          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Must include 1 uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Must include 1 number";
              }
              return null;
            }}
          >
            <Label className="text-gray-300">Password</Label>
            <Input placeholder="Enter your password" className="rounded-lg" />
            <Description className="text-xs text-gray-500">
              At least 8 characters, 1 uppercase & 1 number
            </Description>
            <FieldError />
          </TextField>

          <Button
            type="submit"
            className="w-full bg-[#5271FF] hover:bg-[#3f5ce0] text-white font-medium mt-2 rounded-xl shadow-lg shadow-[#5271FF]/30"
          >
            Sign Up
          </Button>
        </Form>

        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-white/10"></div>
          <span className="text-gray-400 text-sm">or</span>
          <div className="flex-1 h-px bg-white/10"></div>
        </div>

        {/* Google Login */}
        <Button
          onClick={handleGoogleLogin}
          variant="bordered"
          className="w-full bg-white text-black hover:bg-gray-200 rounded-xl font-medium flex items-center justify-center gap-2"
        >
          <FaGoogle /> Continue with Google
        </Button>

        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an account?{" "}
          <Link href="/signin" className="text-[#5271FF] hover:underline">
            Sign In
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default RegisterPage;
