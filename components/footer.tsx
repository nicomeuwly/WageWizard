import Link from "next/link"

export default function Footer() {
  return (
    <footer className="p-5 w-full h-28 flex flex-row justify-around">
        <Link href="/" className="flex flex-col justify-items-center text-center"><span className="material-symbols-rounded text-center text-5xl">home</span>Accueil</Link>
        <Link href="/entry" className="flex flex-col justify-items-center text-center"><span className="material-symbols-rounded text-center text-5xl">alarm_add</span>Saisie</Link>
        <Link href="/calendar" className="flex flex-col justify-items-center text-center"><span className="material-symbols-rounded text-center text-5xl">calendar_month</span>Calendrier</Link>
        <Link href="/account" className="flex flex-col justify-items-center text-center"><span className="material-symbols-rounded text-center text-5xl">account_circle</span>Compte</Link>
    </footer>
  );
}
