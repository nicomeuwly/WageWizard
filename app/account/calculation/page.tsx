import Header from "@/components/header";

export default function CalculationPage() {
  const leftButton = {
    icon: "arrow_back_ios",
    link: "/account",
  };
  const rightButton = {
    icon: "",
    link: "",
  };

  return (
    <>
      <Header
        title="Calcul du salaire"
        leftButton={leftButton}
        rightButton={rightButton}
      />
      <div className="p-5 flex flex-col items-center h-5/6">
        <h1 className="text-xl font-bold text-center align-middle">
          Modification du calcul
        </h1>
        <div className="pt-2 pb-8 text-font-secondary">
          Etapes du calcul
        </div>
        <div className="w-full h-full flex flex-col gap-8 items-center"></div>
      </div>
    </>
  );
}
