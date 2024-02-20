import Header from "@/components/header";

export default function Home() {
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
    </>
  );
}
