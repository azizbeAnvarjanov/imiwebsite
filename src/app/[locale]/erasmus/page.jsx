"use client";

import React from "react";
import { Globe, BookOpen } from "lucide-react";
import ErasmusRows from "@/app/(customComponents)/ErasmusRows";
import BenefitsSection from "@/app/(customComponents)/BenefitsSection";
import { useTranslations } from "next-intl";

const Erasmus = () => {
  const t = useTranslations("erasmus");
  return (
    <div className="py-10 px-4 bg-white">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto space-y-4 flex flex-col justify-center min-h-[50vh]">
        <h1 className="text-4xl sm:text-5xl font-bold uppercase text-center sm:text-left">
          {t("name")}
        </h1>
        <h1 className="text-4xl sm:text-5xl text-blue-600 font-bold uppercase text-center sm:text-left">
          {t("p1")}
        </h1>
        <p className="text-base sm:text-xl text-gray-700 max-w-xl mx-auto sm:mx-0 text-center sm:text-left">
          {t("p2")}
        </p>
      </div>

      {/* International Educational Opportunities Section */}
      <div className="max-w-6xl mx-auto mt-16">
        <h1 className="text-3xl sm:text-4xl text-blue-600 font-bold text-center sm:text-left">
          {t("p3")}
        </h1>

        <div className="flex flex-col lg:flex-row gap-6 py-8">
          {/* International Cooperation */}
          <div className="flex-1 bg-white rounded-xl shadow p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-purple-600 text-white p-3 rounded-lg">
                <Globe className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">{t("p4")}</h2>
            </div>
            <p className="text-gray-700 mb-2 text-sm sm:text-base">{t("p6")}</p>
            <p className="text-gray-700 text-sm sm:text-base">{t("p7")}</p>
          </div>

          {/* Educational Initiatives */}
          <div className="flex-1 bg-white rounded-xl shadow p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-600 text-white p-3 rounded-lg">
                <BookOpen className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">{t("p5")}</h2>
            </div>
            <p className="text-gray-700 mb-2 text-sm sm:text-base">{t("p8")}</p>
            <p className="text-gray-700 text-sm sm:text-base">{t("p9")}</p>
          </div>
        </div>
      </div>

      {/* Projects and Opportunities Section */}
      <div className="max-w-6xl mx-auto mt-10">
        <div className="text-center sm:text-left">
          <h1 className="text-3xl text-blue-600 font-bold">
            {t("p10")}
          </h1>
          <p className="text-sm text-gray-600">
            {t("p11")}
          </p>
        </div>
        <div className="mt-6">
          <ErasmusRows />
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center space-y-4">
          <h1 className="text-2xl sm:text-3xl text-blue-600 font-bold">
            {t("p25")}
          </h1>
          <span className="mx-auto bg-red-200 py-1 px-4 text-sm rounded-full mt-4">
            {t("p24")}
          </span>
          <p className="text-sm sm:text-base text-gray-700 max-w-2xl mx-auto">
            {t("p26")}
          </p>
        </div>
        <div className="mt-10">
          <BenefitsSection />
        </div>
      </div>
    </div>
  );
};

export default Erasmus;
