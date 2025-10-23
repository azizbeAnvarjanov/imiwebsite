"use client";

import Link from "next/link";
import { Users, Globe } from "lucide-react";
import { GraduationCap, Notebook, MapPin, Calendar } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ErasmusRows() {
  const t = useTranslations("erasmus");
  const cards = [
    {
      color: "bg-blue-600",
      icon: Users,
      title: t("p12"),
      desc: t("p13"),
      href: "#",
      tagColor: "bg-indigo-50 text-indigo-700",
    },
    {
      color: "bg-purple-800",
      icon: Globe,
      title: t("p14"),
      desc: t("p15"),
      href: "#",
      tagColor: "bg-purple-50 text-purple-700",
    },
    {
      color: "bg-teal-500",
      icon: GraduationCap,
      title: t("p16"),
      desc: t("p17"),
      href: "#",
      tagColor: "bg-teal-100 text-teal-700",
    },
    {
      color: "bg-orange-500",
      icon: Notebook,
      title: t("p18"),
      desc: t("p19"),
      href: "#",
      tagColor: "bg-orange-100 text-orange-700",
    },
    {
      color: "bg-orange-400",
      icon: MapPin, // joylashuv ikonkasiga mos ravishda
      title: t("p20"),
      desc: t("p21"),
      tags: [
        "Modules and Chairs",
        "Projects and Networks",
        "Institutional Support",
      ],
      href: "#",
      tagColor: "bg-orange-100 text-orange-700",
    },
    {
      color: "bg-orange-400",
      icon: MapPin, // joylashuv ikonkasiga mos ravishda
      title: t("p22"),
      desc: t("p23"),
      tags: [
        "Modules and Chairs",
        "Projects and Networks",
        "Institutional Support",
      ],
      href: "#",
      tagColor: "bg-yellow-100 text-yellow-700",
    },
    {
      color: "bg-blue-500",
      icon: Calendar, // taqvim ikonkasiga mos ravishda
      title: t("p24"),
      desc: t("p25"),
      tags: ["Innovative Methods", "Cooperation", "Practice Exchange"],
      href: "#",
      tagColor: "bg-blue-100 text-blue-700",
    },
  ];
  return (
    <div className="space-y-6">
      {cards.map((card, index) => (
        <article
          key={index}
          className="flex flex-col sm:flex-row overflow-hidden rounded-lg shadow"
        >
          {/* Left Icon Panel */}
          <div
            className={`${card.color} flex items-center justify-center sm:w-60 py-8 sm:py-0`}
          >
            <card.icon className="h-14 w-14 text-white" />
          </div>

          {/* Right Content */}
          <div className="flex-1 bg-gray-50 p-6 sm:p-8">
            <div className="flex items-start justify-between">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {card.title}
              </h3>
            </div>

            <p className="text-gray-700 mb-4">{card.desc}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
