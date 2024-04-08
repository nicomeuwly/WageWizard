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
      <div className="p-5 flex flex-col items-center h-5/6">
        <h1 className="text-xl font-bold text-center align-middle">
          {session && session.user && session.user.name}
        </h1>
        <div className="pt-2 pb-8 flex flex-row items-center gap-2">
          <div className="bg-green w-3 h-3 rounded-full"></div>
          En ligne
        </div>
        <div className="w-full h-full flex flex-col gap-8 items-center">
          <LinkElement
            href="/account/infos"
            icon="person"
            text="Informations personnelles"
          />
          <LinkElement
            href="/account/params"
            icon="attach_money"
            text="Paramètres du salaire"
          />
          <LinkElement
            href="/account/history"
            icon="history"
            text="Historique"
          />
        </div>
        <LogoutButton />
      </div>
    </>
  );
}
