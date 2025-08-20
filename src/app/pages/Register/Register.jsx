// src/pages/RegisterPage.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Lock, User, Phone, Eye } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Register() {
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 overflow-y-auto">
      {/* Background gradient */}
      <div className="absolute inset-0 min-h-screen bg-gradient-to-br from-orange-100 via-blue-100 to-green-100 animate-gradient" />

      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-orange-300 opacity-30 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-52 h-52 bg-blue-300 opacity-30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-yellow-200 opacity-20 rounded-full blur-3xl animate-pulse" />

      <div className="relative w-full max-w-5xl z-10">
        {/* Back to home */}
        <Link
          to="/"
          className="inline-flex items-center text-gray-500 hover:text-gray-900 transition-colors mb-8 text-sm"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t("backHome")}
        </Link>

        {/* Card */}
        <div className="bg-white border border-gray-200 shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          {/* Left: Register form */}
          <div className="px-8 py-10">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">C&L</span>
                </div>
                <span className="font-bold text-2xl text-gray-800">
                  Co&Learn
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                {t("register")}
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                {t("registerSubtitle")}
              </p>
            </div>

            <form className="space-y-5">
              {/* Name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t("lastName")}
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder={t("lastName")}
                      className="w-full px-10 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t("firstName")}
                  </label>
                  <input
                    type="text"
                    placeholder={t("firstName")}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="email"
                    placeholder={t("enterEmail")}
                    className="w-full px-10 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("phone")}
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="tel"
                    placeholder={t("phone")}
                    className="w-full px-10 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("password")}
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="password"
                    placeholder={t("createPassword")}
                    className="w-full px-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("confirmPassword")}
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="password"
                    placeholder={t("confirmPassword")}
                    className="w-full px-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Terms */}
              <div className="flex items-start space-x-2">
                <input
                  type="checkbox"
                  className="mt-1 rounded border-gray-300"
                  required
                />
                <span className="text-sm text-gray-600">
                  {t("agree")}{" "}
                  <Link to="#" className="text-orange-500 hover:underline">
                    {t("terms")}{" "}
                  </Link>
                  {t("and")}{" "}
                  <Link to="#" className="text-orange-500 hover:underline">
                    {t("policy")}{" "}
                  </Link>
                </span>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition-colors"
              >
                {t("createAccount")}
              </button>
            </form>
          </div>

          {/* Right: Social login */}
          <div className="bg-gray-50 px-8 py-10 flex flex-col items-center justify-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              {t("quickRegister")}
            </h3>

            <button className="w-full flex items-center justify-center border rounded-lg py-2 text-gray-700 hover:bg-gray-100 transition mb-3">
              {/* Google Icon */}
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              {t("registerWithGoogle")}
            </button>

            <button className="w-full flex items-center justify-center border rounded-lg py-2 text-gray-700 hover:bg-gray-100 transition">
              {/* Facebook Icon */}
              <svg
                className="w-5 h-5 mr-2"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              {t("registerWithFacebook")}
            </button>

            <p className="mt-6 text-sm text-gray-600">
              {t("alreadyHaveAccount")}{" "}
              <Link
                to="/login"
                className="text-orange-500 hover:underline font-medium"
              >
                {t("loginNow")}
              </Link>
            </p>
            {/* Switch language */}
            <div className="flex justify-center gap-2 mt-4 text-sm">
              <button
                onClick={() => i18n.changeLanguage("vi")}
                className="flex items-center gap-1 px-3 py-1.5 rounded-xl border border-gray-300 
               hover:bg-orange-100 hover:border-orange-400 transition-colors text-sm font-medium"
              >
                <span>VI</span>
              </button>
              <button
                onClick={() => i18n.changeLanguage("en")}
                className="flex items-center gap-1 px-3 py-1.5 rounded-xl border border-gray-300 
               hover:bg-orange-100 hover:border-orange-400 transition-colors text-sm font-medium"
              >
                <span>EN</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
