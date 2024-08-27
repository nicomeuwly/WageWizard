import PageLayout from "@/components/pageLayout";

export default function CalculationPage() {

  return (
    <PageLayout
      leftButton={["arrow_back_ios", "/account"]}
      rightButton={["", ""]}
      headerTitle="Calcul du salaire"
      title="Modification du calcul"
      subtitle="secondary"
      subtitleText="Etapes du calcul"
      children={
        <div className="w-full h-3/4 overflow-auto"></div>
      }
    />
  );
}
