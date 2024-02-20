import Header from "@/components/header";

export default function Params() {
  const leftButton = {
    icon: "arrow_back_ios",
    link: "/account"
  };
  const rightButton = {
    icon: "",
    link: ""
  };

  return (
    <>
      <Header title="Paramètres du salaire" leftButton={leftButton} rightButton={rightButton} />
    </>
  );
}
