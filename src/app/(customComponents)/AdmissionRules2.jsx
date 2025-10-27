import AutoImageCarousel from "@/app/(customComponents)/NewsImagesCarusel";
import { useTranslations } from "next-intl";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AdmissionRules2 = () => {
  const t = useTranslations("qabul-tartibi-en");
  const f = useTranslations("faculties");

  return (
    <div>
      EN
      <div className="my-3">
        <h2 className="text-2xl font-bold">{t("title")}</h2>
        <h2 className="text-2xl font-bold">{t("title-2")}</h2>
        <p>{t("p-1")}</p>
        <div className="w-full overflow-x-auto my-4">
          <Table className="min-w-[700px] text-sm">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]  bg-gray-200">№</TableHead>
                <TableHead className="bg-gray-200">{t("Dasturlar")}</TableHead>
                <TableHead className="bg-gray-200">
                  {t("Talim shakli")}
                </TableHead>
                <TableHead className="bg-gray-200">{t("Talim tili")}</TableHead>
                <TableHead className="bg-gray-200">
                  {t("Qish davomiyligi")}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="">1</TableCell>
                <TableCell>{f("davolash-ishi")}</TableCell>
                <TableCell>{f("d-talim-shakli")}</TableCell>
                <TableCell>{f("d-tili")}</TableCell>
                <TableCell>{f("d-muddati")}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="">2</TableCell>
                <TableCell>{f("pediatriya")}</TableCell>
                <TableCell>{f("d-talim-shakli")}</TableCell>
                <TableCell>{f("d-tili")}</TableCell>
                <TableCell>{f("d-muddati")}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="">3</TableCell>
                <TableCell>{f("stom")}</TableCell>
                <TableCell>{f("d-talim-shakli")}</TableCell>
                <TableCell>{f("d-tili")}</TableCell>
                <TableCell>{f("s-muddati")}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <p>{t("p-2")}</p>
        <br />
        <p>{t("Talim shakli")}</p>
        <p>{t("title-4")}</p>
        <p>{t("p-3")}</p>
        <p className="text-xl font-bold  my-4">{t("title-5")}</p>
        <p>{t("p-4")}</p>
        <ul className="list-disc ml-6">
          <li>{t("p-4-1")}</li>
          <li>{t("p-4-2")}</li>
          <li>{t("p-4-3")}</li>
          <li>{t("p-4-4")}</li>
        </ul>
        <p className="text-xl font-bold  my-4">{t("p-5")}</p>
        <p>{t("p-6")}</p>
        <br />
        <p className="text-xl font-bold  my-4">{t("title-6")}</p>
        <p>{t("p-7")}</p>
        <p>{t("p-7-1")}</p>
        <ul className="list-disc ml-6">
          <li>{t("p-7-2")}</li>
          <li>{t("p-7-3")}</li>
          <li>{t("p-7-4")}</li>
        </ul>
        <br />
        <p className="text-xl font-bold  my-4">{t("title-7")}</p>
        <p>{t("p-8")}</p>
        <br />
        <p>{t("t-9")}</p>
        <ul className="list-disc ml-6">
          <li>{t("t-9-1")}</li>
          <li>{t("t-9-2")}</li>
        </ul>
        <p>{t("t-9-3")}</p>
        <br />
        <p className="text-xl font-bold  my-4">{t("t-10")}</p>
        <p>{t("t-10-t")}</p>
        <ul className="list-disc ml-6">
          <li>{t("t-10-1")}</li>
          <li>{t("t-10-2")}</li>
          <li>{t("t-10-3")}</li>
          <li>{t("t-10-4")}</li>
        </ul>
        <p>{t("t-10-f")}</p>
        <br />
        <p className="text-xl font-bold  my-4">{t("t-12")}</p>
        <p>{t("t-12-t")}</p>
        <ul className="list-disc ml-6">
          <li>{t("t-12-1")}</li>
          <li>{t("t-12-2")}</li>
          <li>{t("t-12-3")}</li>
          <li>{t("t-12-4")}</li>
          <li>{t("t-12-4")}</li>
        </ul>
        <br />
        <p className="text-xl font-bold  my-4">{t("t-15")}</p>
        <p>{t("t-15-t")}</p>
        <ul className="list-disc ml-6">
          <li>{t("t-15-1")}</li>
          <li>{t("t-15-2")}</li>
          <li>{t("t-15-3")}</li>
        </ul>
        <p>{t("t-15-f")}</p>
        <br />
        <p className="text-xl font-bold  my-4">{t("t-18")}</p>
        <p className="text-xl font-bold  my-4">{t("t-19")}</p>
        <ul className="list-disc ml-6">
          <li>{t("t-19-1")}</li>
          <li>{t("t-19-2")}</li>
        </ul>
        <br />
        <p className="text-xl font-bold  my-4">{t("t-21")}</p>
        <p>{t("t-21-t")}</p>
        <br />
        <p className="text-xl font-bold  my-4">{t("t-23")}</p>
        <ul className="list-disc ml-6">
          <li>{t("t-23-1")}</li>
          <li>{t("t-23-2")}</li>
          <li>{t("t-23-3")}</li>
          <li>{t("t-23-4")}</li>
        </ul>
        <p>{t("t-24")}</p>
        <br />
        <p className="text-xl font-bold  my-4">{t("t-26")}</p>
        <p>{t("t-26-t")}</p>
        <br />
        <p className="text-xl font-bold  my-4">{t("t-27")}</p>
        <p>{t("t-27-t")}</p>
        <ul className="list-disc ml-6">
          <li>{t("t-27-1")}</li>
          <li>{t("t-27-2")}</li>
        </ul>
        <br />
        <p className="text-xl font-bold  my-4">{t("t-28")}</p>
        <p>{t("t-28-t")}</p>
      </div>
    </div>
  );
};

export default AdmissionRules2;
