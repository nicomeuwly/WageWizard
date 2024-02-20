import Header from "@/components/header";

export default function Calendar() {
  const leftButton = {
    icon: "bar_chart",
    link: "/account/history"
  };
  const rightButton = {
    icon: "calendar_month",
    link: ""
  };

  return (
    <>
      <Header title="Calendrier" leftButton={leftButton} rightButton={rightButton} />
    </>
  );
}