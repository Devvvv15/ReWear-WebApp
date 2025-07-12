"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    setTimeout(() => {
      setLoading(false);
      if (email && password) {
        setMessage({ type: "success", text: "Logged in successfully!" });
        router.push("/dashboard");
      } else {
        setMessage({ type: "error", text: "Please enter valid credentials." });
      }
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-100 via-white to-green-100">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md border border-green-200">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-green-700 font-sans">
          Login to <span className="text-black">ReWear</span>
        </h2>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div
              className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-xl text-white font-semibold transition-all duration-200 ${
              loading
                ? "bg-green-300 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {loading ? (
              <span className="flex justify-center items-center">
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  />
                </svg>
                Logging in...
              </span>
            ) : (
              "Login"
            )}
          </button>

          <button
            type="button"
            onClick={() => router.push("/register")}
            className="w-full border border-green-600 text-green-700 hover:bg-green-50 font-semibold py-3 rounded-xl transition"
          >
            Create a New Account
          </button>

          {message.text && (
            <div
              className={`text-center mt-4 text-sm font-medium ${
                message.type === "success"
                  ? "text-green-600 animate-pulse"
                  : "text-red-500 animate-shake"
              }`}
            >
              {message.text}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
