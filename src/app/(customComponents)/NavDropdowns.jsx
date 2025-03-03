import { useLocale, useTranslations } from "next-intl";
import React from "react";
import MobileNavbar from "./MobileNavbar";
import { Link } from "@/i18n/routing";

const NavDropdowns = () => {
  const t = useTranslations("Navbar");

  return (
    <div className="flex z-50 items-center">
      <div className="lg:flex md:hidden items-center hidden">
        <div className="mx-auto flex items-center justify-center bg-white">
          <div className="group relative cursor-pointer">
            <div className="flex items-center justify-between  bg-white px-4">
              <div
                className="menu-hover text-base font-medium text-black p-2 rounded-md"
                onClick=""
              >
                {t("institut")}
              </div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </div>

            <div className="invisible absolute z-50 flex w-[300px] flex-col bg-white  text-black shadow-xl group-hover:visible rounded-md">
              <Link
                className="py-2 px-4 hover:bg-gray-100 transition-all"
                href="/pages/rector-freeze"
              >
                {t("rektor-murojati")}
              </Link>
              <div className="relative group-aboutsUs">
                <div className="py-2 px-4 hover:bg-gray-100 transition-all cursor-pointer">
                  {t("biz-haqimizda")}
                </div>
                <ul className="absolute opacity-0 invisible right-full top-0 w-[300px] bg-white shadow-lg">
                  <li className="px-4 py-2 hover:bg-muted">
                    <Link href="/pages/about-us"> {t("biz-haqimizda")}</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-muted">
                    <Link href="/pages/partner-universities">
                      {t("hamkor-universitetlar")}
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-muted">
                    <Link href="/pages/core-values">
                      {t("asosiy-qadriyatlar")}
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-muted">
                    <Link href="/pages/basic-documents">
                      {t("asosiy-meyoriy-hujjatlar")}
                    </Link>
                  </li>
                </ul>
              </div>
              <Link
                className="py-2 px-4 hover:bg-gray-100 transition-all"
                href={`/pages/institut-of-history`}
              >
                {t("institut-tarixi")}
              </Link>
              <Link
                className="py-2 px-4 hover:bg-gray-100 transition-all"
                href={`/pages/scientific-council`}
              >
                {t("ilmiy-kengash")}
              </Link>
              <Link
                className="py-2 px-4 hover:bg-gray-100 transition-all"
                href={`/pages/administration-institute`}
              >
                {t("institut-mamuriyati")}
              </Link>
              <Link
                className="py-2 px-4 hover:bg-gray-100 transition-all"
                href={`/pages/trip-the-institute`}
              >
                {t("institutga-sayohat")}
              </Link>

              {/* <Link
                className="py-2 px-4 hover:bg-gray-100 transition-all"
                href={`/pages/institute-map`}
              >
                {t("institut-xaritasi")}
              </Link> */}
              <Link
                className="py-2 px-4 hover:bg-gray-100 transition-all"
                href={`/pages/faq`}
              >
                {t("faq")}
              </Link>
            </div>
          </div>
        </div>
        <div className="mx-auto flex items-center justify-center bg-white">
          <div className="group relative cursor-pointer">
            <div className="flex items-center justify-between  bg-white px-4">
              <div
                className="menu-hover text-base font-medium text-black p-2 rounded-md"
                onClick=""
              >
                Tadqiqot inovatsiyalar
              </div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </div>

            <div className="invisible absolute z-50 flex w-[300px] flex-col bg-white  text-black shadow-xl group-hover:visible rounded-md">
              <Link
                className="py-2 px-4 hover:bg-gray-100 transition-all"
                href="/"
              >
                Konferensiya va tadbirlar
              </Link>
              <Link
                className="py-2 px-4 hover:bg-gray-100 transition-all"
                href="/"
              >
                Ilmiy jurnal
              </Link>
              <Link
                className="py-2 px-4 hover:bg-gray-100 transition-all"
                href="/"
              >
                Ilmiy kengash
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto flex items-center justify-center bg-white">
          <div className="group relative cursor-pointer">
            <div className="flex items-center justify-between  bg-white px-4">
              <div
                className="menu-hover text-base font-medium text-black p-2 rounded-md"
                onClick=""
              >
                {t("xalqaro-faoliyat")}
              </div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </div>

            <div className="invisible absolute z-50 flex w-[300px] flex-col bg-white  text-black shadow-xl group-hover:visible rounded-md">
              <Link
                className="py-2 px-4 hover:bg-gray-100 transition-all"
                href={`/pages/international-cooperation`}
              >
                {t("xalqaro-hamkorlik")}
              </Link>
              <Link
                className="py-2 px-4 hover:bg-gray-100 transition-all"
                href={`/pages/international-students`}
              >
                {t("xalqaro-talabalar")}
              </Link>
              <Link
                className="py-2 px-4 hover:bg-gray-100 transition-all"
                href={`/pages/exchange`}
              >
                {t("almashinuv-dasturi")}
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto flex items-center justify-center bg-white">
          <div className="group relative cursor-pointer">
            <div className="flex items-center justify-between  bg-white px-4">
              <div
                className="menu-hover text-base font-medium text-black p-2 rounded-md"
                onClick=""
              >
                {t("grandlar")}
              </div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </div>

            <div className="invisible absolute z-50 flex w-[300px] flex-col bg-white  text-black shadow-xl group-hover:visible rounded-md">
              <Link
                className="py-2 px-4 hover:bg-gray-100 transition-all"
                href={`/pages/bachelors-degree`}
              >
                {t("bakalavr-grandi")}
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="mx-auto flex items-center justify-center bg-white">
          <div className="group relative cursor-pointer">
            <div className="flex items-center justify-between  bg-white px-4">
              <div className="menu-hover text-base font-medium text-black p-2 rounded-md">
                {t("ilmiy-faoliyat")}
              </div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </div>

            <div className="invisible absolute z-50 flex w-[300px] flex-col bg-white  text-black shadow-xl group-hover:visible rounded-md">
              <Link
                className="py-2 px-4 hover:bg-gray-100 transition-all"
                href={`/pages/journal`}
              >
                {t("ilmiy-jurnal")}
              </Link>
            </div>
          </div>
        </div> */}

        <div className="mx-auto flex items-center justify-center bg-white">
          <div className="group relative cursor-pointer">
            <div className="flex items-center justify-between  bg-white px-4">
              <div
                className="menu-hover text-base font-medium text-black p-2 rounded-md"
                onClick=""
              >
                {t("student-union")}
              </div>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </div>

            <div className="invisible absolute z-50 flex w-[300px] flex-col bg-white  text-black shadow-xl group-hover:visible rounded-md">
              <Link
                className="py-2 px-4 hover:bg-gray-100 transition-all"
                href={`/pages/student-union`}
              >
                {t("student-union")}
              </Link>
            </div>
          </div>
        </div>
        <Link
          className="py-2 px-4 hover:bg-gray-100 transition-all"
          href={`/kutubxona`}
        >
          {t("el-kutubxona")}
        </Link>
      </div>
      <MobileNavbar />
    </div>
  );
};

export default NavDropdowns;
