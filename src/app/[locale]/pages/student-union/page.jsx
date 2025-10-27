import { useTranslations } from "next-intl";
import React from "react";
import AutoImageCarousel from "@/app/(customComponents)/NewsImagesCarusel";
import { useLocale } from "next-intl";

const StudentUnion = () => {
  const t = useTranslations("student-union");
  const t2 = useTranslations("student-union-2");
  const locale = useLocale();
  const images = [
    "/about-us/1.jpg",
    "/about-us/2.jpg",
    "/about-us/3.jpg",
    "/about-us/4.jpg",
    "/about-us/5.jpg",
  ];

  return (
    <div>
      <AutoImageCarousel images={images} interval={5000} />
      <br />
      {locale === "en" ? (
        <div>
          <p className="font-bold mb-4">{t2("text-1")}</p>
          <p className="font-bold mb-4">{t2("text-2")}</p>
          <ul>
            <li>{t2("text-2-1")}</li>
            <li>{t2("text-2-2")}</li>
            <li>{t2("text-2-3")}</li>
            <li>{t2("text-2-4")}</li>
            <li>{t2("text-2-5")}</li>
          </ul>
        </div>
      ) : (
        <div>
          <p className="font-bold mb-4">{t("text-1")}</p>
          <p className="font-bold mb-4">{t("text-2")}</p>
          <p className="mb-4">{t("text-3")}</p>
          <p>{t("text-4")}</p>
          <p>{t("text-5")}</p>
          <p>{t("text-6")}</p>
          <p>{t("text-7")}</p>
        </div>
      )}

      <p className="my-4 font-bold">{t("text-8")}</p>
      <p>{t("text-9")}</p>
      <p>{t("text-10")}</p>
      <p>{t("text-11")}</p>
      <p>{t("text-12")}</p>
      <p>{t("text-13")}</p>
      <p>{t("text-14")}</p>
      <p>{t("text-15")}</p>
      <p>{t("text-16")}</p>
      <p>{t("text-17")}</p>
      <p>{t("text-18")}</p>
      <p>{t("text-19")}</p>
      <p>{t("text-20")}</p>
    </div>
  );
};

export default StudentUnion;
