import AutoImageCarousel from "@/app/(customComponents)/NewsImagesCarusel";
import { useTranslations } from "next-intl";
import React from "react";

const CoreValues = () => {
  const images = ["/asosiy-qadriyatlar/1.jpg", "/asosiy-qadriyatlar/2.png"];
  const t = useTranslations("qadriyatlarimiz");
  return (
    <div>
      <AutoImageCarousel images={images} interval={5000} />
      <div className="my-3">
        <p className="font-bold">{t("vision")}</p>
        <p>{t("vision_p")}</p> <br />
        <p className="font-bold">{t("mission")}</p>
        <ul>
          <li className="ml-6">{t("mission_p")}</li>
          <li className="ml-6">{t("mission_p2")}</li>
          <li className="ml-6">{t("mission_p3")}</li>
          <li className="ml-6">{t("mission_p4")}</li>
        </ul>
      </div>
    </div>
  );
};

export default CoreValues;
