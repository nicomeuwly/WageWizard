"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function Footer() {
  const pathName = usePathname();
  return (
    <footer className="p-5 w-full flex flex-row justify-around">
      <Link
        href="/"
        className={"flex flex-col justify-items-center text-center focus:text-font-primary text-sm " + (pathName === "/" ? "text-font-primary" : "text-font-secondary")}
      >
        <span className="material-symbols-rounded text-center text-4xl">home</span>Accueil
      </Link>
      <Link
        href="/entry"
        className={"flex flex-col justify-items-center text-center focus:text-font-primary text-sm " + (pathName.includes("/entry") ? "text-font-primary" : "text-font-secondary")}
      >
        <span className="material-symbols-rounded text-center text-4xl">alarm_add</span>Saisie
      </Link>
      <Link
        href="/calendar"
        className={"flex flex-col justify-items-center text-center focus:text-font-primary text-sm " + (pathName.includes("/calendar") ? "text-font-primary" : "text-font-secondary")}
      >
        <span className="material-symbols-rounded text-center text-4xl">calendar_month</span>Calendrier
      </Link>
      <Link
        href="/account"
        className={"flex flex-col justify-items-center text-center focus:text-font-primary text-sm " + (pathName.includes("/account") ? "text-font-primary" : "text-font-secondary")}
      >
        <span className="material-symbols-rounded text-center text-4xl">account_circle</span>Compte
      </Link>
    </footer>
  );
}
