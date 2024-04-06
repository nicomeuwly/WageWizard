import Header from "@/components/header";
import Link from "next/link";
import styles from "./account.module.css";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { LogoutButton } from "@/components/auth";

export default async function Account() {
  const session = await getServerSession(authOptions)
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
          <Link href="/account/infos" className={styles.setting}><span className="material-symbols-rounded">person</span>
            Infos personnelles
          </Link>
          <Link href="/account/params" className={styles.setting}><span className="material-symbols-rounded">attach_money</span>
            Paramètres du salaire
          </Link>
          <Link href="/account/history" className={styles.setting}><span className="material-symbols-rounded">history</span>
            Historique
          </Link>
        </div>
        <LogoutButton />
      </div>
    </>
  );
}
