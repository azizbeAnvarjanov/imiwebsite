import AutoImageCarousel from "@/app/(customComponents)/NewsImagesCarusel";
import SportPage from "@/app/(customComponents)/SportPage";
import SportPageEn from "@/app/(customComponents)/SportPageEn";
import { useLocale } from "next-intl";
import React from "react";

const Sport = () => {
  const images = [
    "/sport/1.jpg",
    "/sport/2.jpg",
    "/sport/3.jpg",
    "/sport/4.jpg",
    "/sport/5.jpg",
  ];
  const locale = useLocale();
  return (
    <div>
      <AutoImageCarousel images={images} interval={5000} />
      {locale === "en" ? <SportPageEn /> : <SportPage />}
    </div>
  );
};

export default Sport;
