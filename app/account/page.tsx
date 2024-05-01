import Header from "@/components/header";
import { getServerSession } from "next-auth";
import { LogoutButton } from "@/components/auth";
import { LinkElement } from "@/components/listElement";

export default async function Account() {
  const session = await getServerSession();
  const leftButton = {
    icon: "",
    link: "",
  };
  const rightButton = {
    icon: "",
    link: "",
  };

  return (
    <>
      <Header
        title="Compte"
        leftButton={leftButton}
        rightButton={rightButton}
      />
      <div className="p-5 flex flex-col items-center h-full">
        <h1 className="text-xl font-bold text-center align-middle">
          {session && session.user && session.user.name}
        </h1>
        <div className="pt-2 pb-8 flex flex-row items-center gap-2 text-font-secondary">
          <div className="bg-green w-3 h-3 rounded-full"></div>
          En ligne
        </div>
        <div className="w-full h-1/2 flex flex-col items-center mb-16">
          <LinkElement
            href="/account/infos"
            icon="person"
            text="Informations personnelles"
            style="rounded-t-2xl border-b border-b-gray-2"
          />
          <LinkElement
            href="/account/params"
            icon="attach_money"
            text="Paramètres du salaire"
            style="border-y border-y-gray-2"
          />
          <LinkElement
            href="/account/calculation"
            icon="equal"
            text="Calcul du salaire"
            style="border-y border-y-gray-2"
          />
          <LinkElement
            href="/account/history"
            icon="history"
            text="Historique"
            style="rounded-b-2xl border-t border-t-gray-2"
          />
        </div>
        <LogoutButton />
      </div>
    </>
  );
}
