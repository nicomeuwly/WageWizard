import Header from "@/components/header";

export default function Infos() {
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
      <Header title="Infos personnelles" leftButton={leftButton} rightButton={rightButton} />
    </>
  );
}
