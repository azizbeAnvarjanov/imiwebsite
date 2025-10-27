import { useTranslations } from "next-intl";

export default function SportPageEn() {
  const t = useTranslations("Sport-2");

  return (
    <div className="px-4 py-8 space-y-6">
      <h1 className="text-3xl font-bold">{t("title-1-b")}</h1>
      <p>{t("title-2")}</p>
      <p>{t("title-3")}</p>
      <p>{t("title-4")}</p>
      <p>{t("title-5")}</p>
    </div>
  );
}
