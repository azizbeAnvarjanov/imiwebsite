import AutoImageCarousel from "@/app/(customComponents)/NewsImagesCarusel";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

const BachelosDegree = () => {
  const t = useTranslations("grand");
  const tEn = useTranslations("grand-2");
  const locale = useLocale();
  const images = [
    "/grand-students/1.jpg",
    "/grand-students/2.jpg",
    "/grand-students/3.jpg",
    "/grand-students/4.jpg",
    "/grand-students/5.jpg",
  ];

  return (
    <div>
      <AutoImageCarousel images={images} interval={5000} />
      {locale === "ru" && (
        <>
          <div className="mt-4">
            <p className="font-bold">{t("text-1")}</p>
            <p>{t("text-2")}</p>
            <p>{t("text-3")}</p>
            <p className="mt-2 font-bold">{t("text-5")}</p>
            <p>{t("text-6")}</p>
            <p>{t("text-7")}</p>
            <p>{t("text-8")}</p>
            <p>{t("text-9")}</p>
            <p>{t("text-10")}</p>
            <p className="mt-3 font-bold">{t("text-11")}</p>
            <p>{t("text-12")}</p>
          </div>
        </>
      )}

      {locale === "uz" && (
        <>
          <div className="mt-4">
            <p className="font-bold">{t("text-1")}</p>
            <p>{t("text-2")}</p>
            <p>{t("text-3")}</p>
            <p className="mt-2 font-bold">{t("text-5")}</p>
            <p>{t("text-6")}</p>
            <p>{t("text-7")}</p>
            <p>{t("text-8")}</p>
            <p>{t("text-9")}</p>
            <p>{t("text-10")}</p>
            <p className="mt-3 font-bold">{t("text-11")}</p>
            <p>{t("text-12")}</p>
          </div>
        </>
      )}

      {locale === "en" && (
        <>
          <div className="mt-4">
            <p className="font-bold">{tEn("text-1-b")}</p>
            <p>{tEn("text-1")}</p>
            <p>{tEn("text-2")}</p>
            <br />
            <p className="font-bold">{tEn("text-3-b")}</p>
            <ul className="list-disc ml-6">
              <li>{tEn("text-3-1")}</li>
              <li>{tEn("text-3-2")}</li>
            </ul>
            <br />
            <p className="font-bold">{tEn("text-6-b")}</p>
            <ul className="ml-3">
              <li>{tEn("text-6-1")}</li>
              <li>{tEn("text-6-2")}</li>
              <li>{tEn("text-6-3")}</li>
              <li>{tEn("text-6-4")}</li>
            </ul>
            <p>{tEn("text-6-f")}</p>
            <br />
            <p className="font-bold">{tEn("text-13-b")}</p>
            <p>{tEn("text-13-t")}</p>
            <ul className="list-disc ml-6">
              <li>{tEn("text-13-1")}</li>
              <li>{tEn("text-13-2")}</li>
            </ul>
            <br />
            <p className="font-bold">{tEn("text-17-b")}</p>
            <p>{tEn("text-17-t")}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default BachelosDegree;
