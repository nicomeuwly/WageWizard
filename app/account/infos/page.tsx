import Header from "@/components/header";
import { ListElement } from "@/components/listElement";
import { getServerSession } from "next-auth";

export default async function Infos() {
  const leftButton = {
    icon: "arrow_back_ios",
    link: "/account",
  };
  const rightButton = {
    icon: "",
    link: "",
  };
  const session = await getServerSession();

  return (
    <>
      <Header
        title="Infos personnelles"
        leftButton={leftButton}
        rightButton={rightButton}
      />
      <div className="p-5 flex flex-col items-center h-5/6 gap-16">
        <h1 className="text-xl font-bold text-center align-middle">
          Liste des informations
        </h1>
        <div className="w-full h-full flex flex-col gap-8 items-center">
          <ListElement
            icon="person"
            text={(session && session.user && session.user.name) ?? ""}
          />
          <ListElement
            icon="alternate_email"
            text={(session && session.user && session.user.email) ?? ""}
          />
          <ListElement icon="key_vertical" text="**************" />
        </div>
      </div>
    </>
  );
}
