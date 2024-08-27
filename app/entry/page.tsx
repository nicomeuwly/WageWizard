import Header from "@/components/header";

export default function EntryPage() {
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
