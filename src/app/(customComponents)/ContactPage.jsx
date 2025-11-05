"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); // Faqat xabar ko'rsatish uchun
  };

  return (
    <div className="min-h-screen pt-[15vh]">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-12 bg-white rounded-xl shadow-lg -mt-12 md:-mt-16 relative z-10">
        {/* Left Side Info */}
        <div className="space-y-6">
          {/* Location 1 */}
          <h3 className="font-bold text-xl">{t("h1")}</h3>
          <div className="flex items-start gap-4">
            <div className="text-blue-600 text-3xl">📍</div>
            <div>
              <h3 className="font-bold text-xl">{t("p1")}</h3>
              <p>{t("p2")}</p>
            </div>
          </div>
          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="text-blue-600 text-3xl">📞</div>
            <div>
              <h3 className="font-bold text-xl">{t("p3")}</h3>
              <p>{t("p4")}</p>
              <br />
              {/* <h3 className="font-bold text-xl">{t("h2")}</h3>
              <p>{t("p5")}</p>
              <p>{t("p6")}</p> */}
            </div>
          </div>
          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="text-blue-600 text-3xl">✉️</div>
            <div>
              <h3 className="font-bold text-xl">{t("p7")}</h3>
              <p>{t("p8")}</p>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder={t("p9")}
            className="w-full border border-gray-300 p-3 rounded"
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder={t("p10")}
            className="w-full border border-gray-300 p-3 rounded"
            onChange={handleChange}
            required
          />
          <input
            name="mobile"
            placeholder={t("p11")}
            className="w-full border border-gray-300 p-3 rounded"
            onChange={handleChange}
          />
          <input
            name="subject"
            placeholder={t("p12")}
            className="w-full border border-gray-300 p-3 rounded"
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder={t("p13")}
            rows="4"
            className="w-full border border-gray-300 p-3 rounded"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition w-full"
          >
            {t("p14")}
          </button>
          {submitted && (
            <p className="text-green-600 font-medium mt-2">✅ {t("p15")}</p>
          )}
        </form>
      </div>
    </div>
  );
}
