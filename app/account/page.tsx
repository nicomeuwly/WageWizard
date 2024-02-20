import Header from "@/components/header";
import Link from "next/link";

export default function Account() {
  const leftButton = {
    icon: "",
    link: ""
  };
  const rightButton = {
    icon: "",
    link: ""
  };

  return (
    <>
      <Header title="Compte" leftButton={leftButton} rightButton={rightButton} />
      <Link href="/account/infos">Infos personnelles</Link>
      <Link href="/account/params">Paramètres du salaire</Link>
      <Link href="/account/history">Historique</Link>
    </>
  );
}
