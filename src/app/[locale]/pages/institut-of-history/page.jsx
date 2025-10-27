import AutoImageCarousel from "@/app/(customComponents)/NewsImagesCarusel";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

const InstitutOfHistory = () => {
  const images = ["/institut-history/1.jpg", "/institut-history/2.jpg"];
  const t = useTranslations("Institut-history");
  const locale = useLocale();

  return (
    <div>
      <AutoImageCarousel images={images} interval={5000} />
      <div className="my-3 space-y-10">
        <h1 className="text-2xl font-bold">{t("text-1")}</h1>
        <p>{t("text-2")}</p>
        <p>{t("text-3")}</p>
        <p>{t("text-4")}</p>
        <p>{t("text-5")}</p>
        <p>{t("text-6")}</p>
        {locale === "en" && (
          <>
            <p>{t("text-7-en")}</p>
            <p>{t("text-8-en")}</p>
            <p>{t("text-9-en")}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default InstitutOfHistory;
