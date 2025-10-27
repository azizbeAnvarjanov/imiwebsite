import AdmissionRules1 from "@/app/(customComponents)/AdmissionRules1";
import AdmissionRules2 from "@/app/(customComponents)/AdmissionRules2";
import { useLocale } from "next-intl";

const TripInstitute = () => {
  const locale = useLocale();
  return (
    <div>
      {locale === "en" ? <AdmissionRules2 /> : <AdmissionRules1 />}
    </div>
  );
};

export default TripInstitute;
