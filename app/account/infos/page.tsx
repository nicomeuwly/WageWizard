import Header from "@/components/header";
import { ListElement } from "@/components/listElement";
import { getServerSession } from "next-auth";
import { useState } from "react";

export default async function Infos() {
  const leftButton = {
    icon: "arrow_back_ios",
    link: "/account",
  };
  const rightButton = {
    icon: "",
    link: "",
  };

  const session = await getServerSession();
  const response = await fetch(
    `${process.env.NEXTAUTH_URL}/api/user?email=${session?.user?.email}`,
    { method: "GET" }
  );
  const userId = await response.json();

  return (
    <>
      <Header
        title="Infos personnelles"
        leftButton={leftButton}
        rightButton={rightButton}
      />
      <div className="p-5 flex flex-col items-center h-full gap-16">
        <h1 className="text-xl font-bold text-center align-middle">
          Liste des informations
        </h1>
        <div className="w-full h-2/3 overflow-auto">
          <ListElement
            icon="person"
            text={session?.user?.name ?? ""}
            userId={userId}
            label="Nom"
            fieldToUpdate="name"
          />
          <ListElement
            icon="alternate_email"
            text={session?.user?.email ?? ""}
            userId={userId}
            label="Adresse e-mail"
            fieldToUpdate="email"
          />
          <ListElement
            icon="key_vertical"
            text="**************"
            userId={userId}
            label="Mot de passe"
            fieldToUpdate="password"
          />
        </div>
      </div>
    </>
  );
}
