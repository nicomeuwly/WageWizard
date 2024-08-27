"use client";
import { useSearchParams } from "next/navigation";
import PageLayout from "@/components/pageLayout";

export default async function EditParamPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  return (
    <PageLayout
      leftButton={["arrow_back_ios", "/account/params"]}
      rightButton={["", ""]}
      headerTitle="Paramètres du salaire"
      title="Modification de paramètre"
      subtitle="secondary"
      subtitleText={name ? name : ""}
      children={
        <div className="w-full h-3/4 overflow-auto"></div>
      }
    />
  );
}
