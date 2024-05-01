import Header from "@/components/header";
import { ListElement } from "@/components/listElement";
import { getUser } from "@/lib/userActions";

export default async function Infos() {
  const leftButton = {
    icon: "arrow_back_ios",
    link: "/account",
  };
  const rightButton = {
    icon: "",
    link: "",
  };

  const user = await getUser();
  return (
    <>
      <Header
        title="Infos personnelles"
        leftButton={leftButton}
        rightButton={rightButton}
      />
      <div className="p-5 flex flex-col items-center h-full gap-16">
        <h1 className="text-xl font-bold text-center align-middle">
          Liste des informations
        </h1>
        <div className="w-full h-2/3 overflow-auto">
          <ListElement
            icon="person"
            text={user.name}
            userId={user.id}
            label="Nom"
            type="text"
            autocomplete="new-name"
            fieldToUpdate="name"
          />
          <ListElement
            icon="alternate_email"
            text={user.email}
            userId={user.id}
            label="Adresse e-mail"
            type="email"
            autocomplete="new-email"
            fieldToUpdate="email"
          />
          <ListElement
            icon="key_vertical"
            text="**************"
            userId={user.id}
            label="Mot de passe"
            type="password"
            autocomplete="new-password"
            fieldToUpdate="password"
          />
        </div>
      </div>
    </>
  );
}
