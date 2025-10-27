import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { useLocale } from "next-intl";

const RectorFreeze = () => {
  const t = useTranslations("Rector-reeze");
  const locale = useLocale();

  return (
    <div className="p-2">
      <div className="w-full">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2 mb-4">
            <div className="flex gap-4 flex-col">
              <div className="flex gap-4 flex-col">
                <h1 className="text-4xl md:text-5xl tracking-tighter text-left font-regular">
                  {t("text")}
                </h1>
                <p className="text-sm md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-lg text-left">
                  {t("text-2")}
                </p>
              </div>
            </div>
            <div className="bg-muted overflow-hidden aspect-square relative rounded-xl">
              <img src="/rector.jpg" alt="" className="w-full h-full" />
            </div>
          </div>
          <p className="text-sm md:text-xl leading-relaxed tracking-tight text-muted-foreground text-left">
            {t("text-3")}
          </p>
          <br />
          <p className="text-sm md:text-xl leading-relaxed tracking-tight text-muted-foreground text-left">
            {t("text-4")}
          </p>
          <br />
          <p className="text-sm md:text-xl leading-relaxed tracking-tight text-muted-foreground text-left">
            {t("text-5")}
          </p>
          {locale === "en" && (
            <>
              <br />
              <p className="text-sm md:text-xl leading-relaxed tracking-tight text-muted-foreground text-left">
                {t("text-6-en")}
              </p>
              <br />
              <p className="text-sm md:text-xl leading-relaxed tracking-tight text-muted-foreground text-left">
                {t("text-7-en")}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RectorFreeze;
