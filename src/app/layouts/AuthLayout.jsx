// src/layouts/AuthLayout.jsx
import React from "react";

export default function AuthLayout({ children }) {
  return (
    <div className="relative h-screen w-screen flex items-center justify-center overflow-hidden bg-gray-50">
      {/* Background gradient */}
      <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-orange-100 via-blue-100 to-green-100 animate-gradient" />

      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-orange-300 opacity-30 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-52 h-52 bg-blue-300 opacity-30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-yellow-200 opacity-20 rounded-full blur-3xl animate-pulse" />

      {/* Nội dung (form login/register) */}
      <div className="relative z-10 w-full max-w-md">{children}</div>
    </div>
  );
}
