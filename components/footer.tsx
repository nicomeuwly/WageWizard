import { getServerSession } from "next-auth";
import styles from "./footer.module.css";
import FooterElement from "./footerElement";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";


export default async function Footer() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return null;
  }
  return (
    <footer className={"w-full flex justify-center " + styles.footer}>
      <div className={styles.navigation}>
        <FooterElement href="" icon="home" name="Accueil" />
        <FooterElement href="entry" icon="alarm_add" name="Saisie" />
        <FooterElement href="calendar" icon="calendar_month" name="Calendrier" />
        <FooterElement href="account" icon="account_circle" name="Compte" />
      </div>
    </footer>
  );
}
