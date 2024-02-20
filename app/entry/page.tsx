import Header from "@/components/header";

export default function Entry() {
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
      <Header title="Saisie des heures" leftButton={leftButton} rightButton={rightButton} />
    </>
  );
}
