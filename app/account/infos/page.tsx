import { ListElement } from "@/components/listElement";
import { getUser } from "@/lib/userActions";
import PageLayout from "@/components/pageLayout";

export default async function InfosPage() {
  const user = await getUser();
  return (
      <PageLayout
        leftButton={["arrow_back_ios", "/account"]}
        rightButton={["", ""]}
        headerTitle="Informations personnelles"
        title="Liste des informations"
        subtitle="secondary"
        subtitleText="Aperçu et modification des informations"
        children={
          <div className="w-full h-3/4 overflow-auto">
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
        }
      />
  );
}
