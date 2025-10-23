// app/kutubxona/page.jsx yoki components/Kutubxona.jsx
import React from "react";
import { useTranslations } from "next-intl";

const LibraryNote = () => {
  const t = useTranslations("library_note");
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">📚 {t("name")}</h1>

      <p className="text-lg">
        <strong>{t("p1")}</strong> {t("p2")}
      </p>

      <div>
        <h2 className="text-2xl font-semibold mb-2">📖 {t("p3")}</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>{t("p4")}</li>
          <li>{t("p5")}</li>
          <li>{t("p6")}</li>
          <li>{t("p7")}</li>
          <li>{t("p8")}</li>
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">💾 {t("p9")}</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>📘 {t("p10")}</li>
          <li>🌐 {t("p11")}</li>
          <li>🖥️ {t("p12")}</li>
          <li>📎 {t("p13")}</li>
        </ul>
      </div>

      <p className="text-lg">{t("p14")}</p>
    </div>
  );
};

export default LibraryNote;
