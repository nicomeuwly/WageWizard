"use client";
import Header from "@/components/header";
import { useSearchParams } from "next/navigation";

export default async function Params() {
  const leftButton = {
    icon: "arrow_back_ios",
    link: "/account/params",
  };
  const rightButton = {
    icon: "",
    link: "",
  };
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  return (
    <>
      <Header
        title="Paramètres du salaire"
        leftButton={leftButton}
        rightButton={rightButton}
      />
      <div className="p-5 flex flex-col items-center h-full gap-16">
        <div className="pb-8 flex flex-col items-center gap-2">
          <h1 className="text-xl font-bold text-center align-middle">
            Liste des paramètres
          </h1>
          <p className="text-font-secondary">{name}</p>
        </div>
        <div className="w-full h-2/3 overflow-auto"></div>
      </div>
    </>
  );
}
