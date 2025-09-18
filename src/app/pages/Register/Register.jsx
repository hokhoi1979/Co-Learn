import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, Lock, User, Phone, Eye } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Calendar as CalendarIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { registerApi, registerReset } from "../../redux/auth/registerSlice";
import bg from "../../assets/img/bg1.jpg";
import { Image } from "antd";
export default function Register() {
  const { t, i18n } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const navigate = useNavigate();
  const [fullName, setFullName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordConfirm, setPasswordConfirm] = useState(null);
  const [phone, setPhone] = useState(null);
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [gender, setGender] = useState("Male");
  const [primaryRoleId, setPrimaryRoleId] = useState("1");

  const accountRegister = useSelector(
    (state) => state.register.accountRegister
  );

  const { error } = useSelector((state) => state.register);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      fullName,
      email,
      phone,
      dateOfBirth: new Date(dateOfBirth).toISOString(),
      gender,
      primaryRoleId: parseInt(primaryRoleId, 10),
      password,
      passwordConfirm,
    };
    dispatch(registerApi(payload));
  };

  useEffect(() => {
    if (accountRegister) {
      navigate("/login");
      dispatch(registerReset());
    }
  }, [accountRegister, navigate, dispatch]);

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 overflow-y-auto">
      <div className="absolute inset-0 min-h-screen bg-gradient-to-br from-orange-100 via-blue-100 to-green-100 animate-gradient" />

      <div className="relative w-full max-w-5xl z-10">
        <Link
          to="/"
          className="inline-flex items-center text-gray-500 hover:text-gray-900 transition-colors mb-8 text-sm"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t("backHome")}
        </Link>

        <div className="bg-white border border-gray-200 shadow-xl rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
          <div className="px-8 py-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                {t("register")}
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                {t("registerSubtitle")}
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("fullName")}
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    name="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={t("enterFullName")}
                    className="w-full px-10 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("enterEmail")}
                    className="w-full px-10 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("phone")}
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t("phone")}
                    className="w-full px-10 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("dateOfBirth")}
                </label>
                <div className="relative">
                  <CalendarIcon className="absolute left-3 top-3 h-4 w-4 text-gray-400" />

                  <input
                    type="date"
                    name="dateOfBirth"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    className="w-full px-10 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("gender")}
                </label>
                <select
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                  required
                >
                  <option value="Male">{t("male")}</option>
                  <option value="Female">{t("female")}</option>
                  <option value="Other">{t("other")}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("role")}
                </label>
                <select
                  name="primaryRoleId"
                  value={primaryRoleId}
                  onChange={(e) => setPrimaryRoleId(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                  required
                >
                  <option value="1">{t("student")}</option>
                  <option value="2">{t("parent")}</option>
                  <option value="3">{t("teacher")}</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("password")}
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder={t("createPassword")}
                    className="w-full px-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("confirmPassword")}
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type={showPasswordConfirm ? "text" : "password"}
                    name="passwordConfirm"
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                    placeholder={t("confirmPassword")}
                    className="w-full px-10 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                </div>
              </div>

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

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition-colors"
              >
                {t("createAccount")}
              </button>

              {error && (
                <p className="flex justify-center text-[#f32626] text-sm mt-2 mb-2">
                  {error}
                </p>
              )}
            </form>
          </div>

          <div className="bg-gray-50 px-8 py-10 flex flex-col items-center justify-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C&L</span>
              </div>
              <span className="font-bold text-2xl text-gray-800">Co&Learn</span>
            </div>

            <Image
              src={bg}
              width={"100%"}
              height={300}
              className="rounded-2xl"
            />

            <p className="mt-6 text-sm text-gray-600">
              {t("alreadyHaveAccount")}{" "}
              <Link
                to="/login"
                className="text-orange-500 hover:underline font-medium"
              >
                {t("loginNow")}
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
    </div>
  );
}
