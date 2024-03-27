import Header from "@/components/header";
import Stats from "@/components/stats";

export default function Home() {
  const leftButton = {
    icon: "",
    link: ""
  };
  const rightButton = {
    icon: "",
    link: ""
  };

  const setDate = () => {
    const date = new Date();
    const dateString = date.toLocaleDateString('fr-FR', { weekday: "long", year: "numeric", month: "short", day: "numeric" });
    const firstLetter = dateString.charAt(0).toUpperCase();
    const remainingLetters = dateString.slice(1);
    const newDateString = firstLetter + remainingLetters;
    return newDateString;
  }

  const setTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const timeString = (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes;
    return timeString;
  }

  return (
    <>
      <Header title="Tableau de bord" leftButton={leftButton} rightButton={rightButton} />
      <div className="p-5 h-5/6">
        <div>
          <p className="text-center">{setDate()}</p>
          <p className="font-semibold text-center">{setTime()}</p>
        </div>
        <Stats />
      </div>
    </>
  );
}
