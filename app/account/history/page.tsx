import Header from "@/components/header";

export default function History() {
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
      <Header title="Historique" leftButton={leftButton} rightButton={rightButton} />
    </>
  );
}
