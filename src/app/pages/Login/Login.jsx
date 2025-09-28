import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, Lock, Eye } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { loginApi } from "../../redux/auth/loginSlice";
import bg from "../../assets/img/bg1.jpg";
import { Image } from "antd";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, error } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    values.preventDefault();
    dispatch(loginApi({ email: email, password: password }));
  };
  useEffect(() => {
    if (user?.role === "1") {
      navigate("/kids");
    } else if (user?.role === "2") {
      navigate("/parent");
    } else if (user?.role === "3") {
      navigate("/teacher");
    }
  }, [user, navigate]);

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
            <h2 className="text-2xl font-bold">{t("loginNow")}</h2>
            <p className="text-gray-500 text-sm">{t("welcomeBack")}</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {t("email")}
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition cursor-pointer"
            >
              {t("login")}
            </button>
          </form>
          {error && (
            <p className="flex justify-center text-[#f32626] text-sm mt-2 mb-2">
              {error}
            </p>
          )}

          <p className="text-center text-sm text-gray-500 mt-5">
            {t("noAccount")}{" "}
            <Link
              to="/register"
              className="text-orange-500 hover:text-orange-600 font-medium"
            >
              {t("registerNow")}
            </Link>
          </p>

          <div className="flex justify-center gap-2 mt-4 mb-5 text-sm">
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

          <Image src={bg} width={"100%"} height={200} className="rounded-2xl" />
        </div>
      </div>
    </div>
  );
}
