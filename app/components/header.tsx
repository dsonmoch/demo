"use client";
import Image from "next/image";
import Menu from "@/app/components/menu";

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row xl:gap-150 lg:gap-100 md:gap-50 w-full justify-between items-center px-6 sm:px-10 xl:px-30  md:px-10 pt-2">
      <div className="flex-shrink-0  flex relative items-center justify-center md:justify-start">
        <Image
          src="/Images/logo-header-main.png"
          height={64}
          width={200}
          alt="House of Influenca logo"
          priority
        />
      </div>
      <Menu />
    </header>
  );
}
