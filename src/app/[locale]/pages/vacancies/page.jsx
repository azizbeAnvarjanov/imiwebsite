"use client";
import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ImpulsVacancyPage() {
  const t = useTranslations("vacancies");
  return (
    <div className="min-h-screen py-6 sm:px-2 lg:px-8">
      <div className="max-w-2xl sm:max-w-3xl mx-auto bg-white rounded-2xl sm:p-6 space-y-5 sm:space-y-6">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-800 text-center leading-snug">
          {t("name")}
        </h1>

        <p className="text-gray-700 text-base sm:text-lg">
          ⚡️ <strong>{t("p1")}</strong> {t("p2")}
        </p>

        <ul className="list-disc list-inside text-gray-800 font-medium space-y-1 pl-2 sm:pl-4">
          <li>{t("p3")}</li>
          <li>{t("p4")}</li>
          <li>{t("p5")}</li>
          <li>{t("p6")}</li>
          <li>{t("p7")}</li>
          <li>{t("p8")}</li>
          <li>{t("p9")}</li>
          <li>{t("p10")}</li>
          <li>{t("p11")}</li>
          <li>{t("p12")}</li>
        </ul>

        <div className="text-gray-700 space-y-3 text-base sm:text-lg">
          <p className="font-semibold text-blue-700">🎯 {t("p13")}</p>
          <ul className="list-decimal list-inside space-y-1 pl-2 sm:pl-4">
            <li>{t("p14")}</li>
            <li>{t("p15")}</li>
            <li>{t("p16")}</li>
          </ul>

          <p className="font-semibold text-blue-700">💵 {t("p17")}</p>
          <ul className="list-decimal list-inside space-y-1 pl-2 sm:pl-4">
            <li>{t("p18")}</li>
            <li>{t("p19")}</li>
            <li>{t("p20")}</li>
            <li>{t("p21")}</li>
            <li>{t("p22")}</li>
          </ul>
        </div>

        <div className="text-center space-y-2">
          <Link
            href="https://forms.gle/cBSPRwwtEtVQzKgk9"
            target="_blank"
            className="block sm:inline-block w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full transition"
          >
            📝 {t("p23")}
          </Link>
          <p className="text-sm text-gray-600">
            💬 {t("p24")}:{" "}
            <span className="text-blue-700 font-medium">@ImpulsHRM</span>
          </p>
        </div>
      </div>
    </div>
  );
}
