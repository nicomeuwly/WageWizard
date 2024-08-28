import { getServerSession } from "next-auth";
import { LogoutButton } from "@/components/auth";
import { LinkElement } from "@/components/listElement";
import PageLayout from "@/components/pageLayout";

export default async function AccountPage() {
  const session = await getServerSession();

  return (
    <PageLayout
      leftButton={["", ""]}
      rightButton={["", ""]}
      headerTitle="Compte"
      title={session?.user?.name ?? ""}
      subtitle="status"
      online={true}
      children={
        <div className="w-full h-3/4 flex flex-col items-center">
          <div className="w-full h-5/6 flex flex-col items-center justify-between">
            <div className="w-full h-fit flex flex-col items-center">
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
                style="rounded-b-2xl border-t border-t-gray-2 mb-16"
              />
            </div>
            <LogoutButton />
          </div>
        </div>
      }
    />
  );
}
