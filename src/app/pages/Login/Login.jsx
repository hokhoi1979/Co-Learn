import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Lock, Eye } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { t, i18n } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-blue-100 to-green-100 animate-gradient" />
      <div className="absolute top-10 left-10 w-40 h-40 bg-orange-300 opacity-30 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-52 h-52 bg-blue-300 opacity-30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-yellow-200 opacity-20 rounded-full blur-3xl animate-pulse" />

      <div className="relative w-full max-w-md z-10">
        <Link
          to="/"
          className="inline-flex items-center text-gray-500 hover:text-gray-800 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t("backHome")}
        </Link>

        <div className="bg-white rounded-2xl border shadow-xl p-6 backdrop-blur-sm">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-13 h-10 bg-orange-500 rounded-lg flex items-center justify-center shadow-md ">
                <span className="text-white font-bold text-xl ">C&L</span>
              </div>
              <span className="font-bold text-2xl text-gray-800">Co&Learn</span>
            </div>
            <h2 className="text-2xl font-bold">{t("login")}</h2>
            <p className="text-gray-500 text-sm">{t("welcomeBack")}</p>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t("email")}
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="email"
                  placeholder={t("enterEmail")}
                  className="pl-10 w-full border rounded-lg p-2 focus:ring-2 focus:ring-orange-500 outline-none"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t("password")}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder={t("enterPassword")}
                  className="pl-10 pr-10 w-full border rounded-lg p-2 focus:ring-2 focus:ring-orange-500 outline-none"
                  required
                />
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <Eye className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300" />
                <span className="text-gray-500">{t("rememberMe")}</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-orange-500 hover:text-orange-600"
              >
                {t("forgotPassword")}
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              {t("login")}
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="px-2 text-xs text-gray-400">{t("or")}</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <div className="space-y-3">
            <button className="w-full flex items-center justify-center border rounded-lg py-2 hover:bg-gray-50 transition">
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
              {t("loginGoogle")}
            </button>
            <button className="w-full flex items-center justify-center border rounded-lg py-2 hover:bg-gray-50 transition">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              {t("loginFacebook")}
            </button>
          </div>

          <p className="text-center text-sm text-gray-500 mt-6">
            {t("noAccount")}{" "}
            <Link
              to="/register"
              className="text-orange-500 hover:text-orange-600 font-medium"
            >
              {t("registerNow")}
            </Link>
          </p>

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
  );
}
