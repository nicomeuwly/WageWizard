import Header from "@/components/header";
import Stats from "@/components/stats";
import TimeDateElement from "@/components/timeDateElement";

export default async function Home() {
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
      <Header title="Tableau de bord" leftButton={leftButton} rightButton={rightButton} />
      <div className="p-5 h-5/6">
        <TimeDateElement />
        <Stats />
      </div>
    </>
  );
}
