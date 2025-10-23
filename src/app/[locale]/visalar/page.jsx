"use client";

import React from "react";
import { useTranslations } from "next-intl";

const TuitionFeeDetails = () => {
  const t = useTranslations("visalar");
  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-700 mb-4 text-center">
        {t("p1")}
      </h1>
      <p className="text-gray-700 text-center mb-6">{t("p2")}</p>

      <div className="border rounded-lg shadow-sm overflow-hidden">
        <table className="w-full table-auto text-left">
          <tbody className="divide-y divide-gray-200 text-sm sm:text-base">
            <tr className="bg-gray-50">
              <td className="px-4 py-3 font-medium text-gray-900">{t("p3")}</td>
              <td className="px-4 py-3 text-gray-700">{t("p4")}</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-gray-900">{t("p5")}</td>
              <td className="px-4 py-3 text-gray-700">{t("p6")}</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 font-medium text-gray-900">{t("p7")}</td>
              <td className="px-4 py-3 text-gray-700">{t("p8")}</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium text-gray-900">{t("p9")}</td>
              <td className="px-4 py-3 text-gray-700">{t("p10")}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-6 space-y-3 text-gray-700 text-sm sm:text-base">
        <p className="border-l-4 border-yellow-400 pl-3">{t("p11")}</p>
        <p className="border-l-4 border-yellow-400 pl-3">{t("p12")}</p>
        <p className="border-l-4 border-yellow-400 pl-3">{t("p13")}</p>
        <p className="border-l-4 border-yellow-400 pl-3">{t("p14")}</p>
        <p className="border-l-4 border-yellow-400 pl-3">{t("p15")}</p>
      </div>
    </div>
  );
};

export default TuitionFeeDetails;
