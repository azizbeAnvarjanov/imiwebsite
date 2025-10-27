import AutoImageCarousel from "@/app/(customComponents)/NewsImagesCarusel";
import { useTranslations } from "next-intl";
import React from "react";
import { useLocale } from "next-intl";

const ScientificCouncil = () => {
  const t = useTranslations("Scientific-council");
  const t2 = useTranslations("Scientific-council-2");
  const locale = useLocale();
  const images = ["/institut-history/1.jpg", "/institut-history/2.jpg"];
  return (
    <div>
      <AutoImageCarousel images={images} interval={5000} />

      {locale !== "en" && (
        <div className="my-3 space-y-10">
          <p>{t("text-1")}</p>
          <p>{t("text-2")}</p>
          <p>{t("text-3")}</p>
          <p>{t("text-4")}</p>
          <p>{t("text-5")}</p>
          <p>{t("text-6")}</p>
        </div>
      )}
      {locale === "en" && (
        <div className="my-3 ">
          <p className="font-bold">{t2("text-1-b")}</p>
          <p>{t2("text-2")}</p>
          <p>{t2("text-3")}</p>
          <br />
          <p className="font-bold">{t2("text-4-b")}</p>
          <p>{t2("text-5")}</p>
          <p>{t2("text-6")}</p>
          <br />
          <p className="font-bold">{t2("text-7-b")}</p>
          <ul className="list-disc ml-6">
            <li>{t2("text-7-1")}</li>
            <li>{t2("text-7-2")}</li>
            <li>{t2("text-7-3")}</li>
            <li>{t2("text-7-4")}</li>
            <li>{t2("text-7-5")}</li>
            <li>{t2("text-7-6")}</li>
          </ul>
          <br />
          <p>{t2("text-8")}</p>
        </div>
      )}
    </div>
  );
};

export default ScientificCouncil;
