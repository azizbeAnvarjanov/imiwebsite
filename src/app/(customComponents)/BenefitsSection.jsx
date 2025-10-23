// components/BenefitsSection.jsx
"use client";

import {
  Globe,
  User,
  BadgeCheck,
  BookOpen,
  Coffee,
  MapPin,
} from "lucide-react";
import { useTranslations } from "next-intl";

export default function BenefitsSection() {
  const t = useTranslations("erasmus");

  const items = [
    {
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      title: t("p27"),
      desc: t("p28"),
    },
    {
      icon: <User className="w-8 h-8 text-green-500" />,
      title: t("p29"),
      desc: t("p30"),
    },
    {
      icon: <BadgeCheck className="w-8 h-8 text-purple-500" />,
      title: t("p31"),
      desc: t("p32"),
    },
    {
      icon: <BookOpen className="w-8 h-8 text-rose-500" />,
      title: t("p33"),
      desc: t("p35"),
    },
    {
      icon: <Coffee className="w-8 h-8 text-orange-500" />,
      title: t("p34"),
      desc: t("p36"),
    },
    {
      icon: <MapPin className="w-8 h-8 text-purple-700" />,
      title: t("p37"),
      desc: t("p38"),
    },
  ];
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-all duration-200"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
