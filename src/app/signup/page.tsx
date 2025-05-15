"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Eye, EyeOff } from "lucide-react"

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle signup logic here
    console.log("Signup submitted")
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-base-100">
      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center p-6 order-2 md:order-1">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary">Create Account</h1>
            <p className="mt-2 text-base-content/70">Join our student community</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input type="text" placeholder="John" className="input input-bordered w-full" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input type="text" placeholder="Doe" className="input input-bordered w-full" required />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Student ID</span>
              </label>
              <input type="text" placeholder="STU12345" className="input input-bordered w-full" required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="your.email@university.edu"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="input input-bordered w-full pr-10"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/50"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <label className="label">
                <span className="label-text-alt">Must be at least 8 characters</span>
              </label>
            </div>

            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-2">
                <input type="checkbox" className="checkbox checkbox-primary checkbox-sm" required />
                <span className="label-text">
                  I agree to the{" "}
                  <Link href="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                </span>
              </label>
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Create Account
            </button>
          </form>

          <div className="divider my-6">OR</div>

          <button className="btn btn-outline w-full mb-4">Sign up with Google</button>

          <p className="text-center mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 relative hidden md:block order-1 md:order-2">
        <Image
          src="/login.webp?height=800&width=600"
          alt="Student in campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
          <div className="text-center p-8 bg-base-100/80 rounded-lg max-w-md">
            <h2 className="text-2xl font-bold text-primary mb-2">Start Your Journey</h2>
            <p className="text-base-content">
              Join thousands of students managing their academic life with our platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

