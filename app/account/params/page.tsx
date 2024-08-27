import { getUser } from "@/lib/userActions";
import { ParamsElement } from "@/components/listElement";
import PageLayout from "@/components/pageLayout";

export default async function ParamsPage() {
  const user = await getUser();

  return (
    <PageLayout
      leftButton={["arrow_back_ios", "/account"]}
      rightButton={["add", "/account/params/add"]}
      headerTitle="Paramètres du salaire"
      title="Liste des paramètres"
      subtitle="params"
      params={[2, 2]}
      children={
        <div className="w-full h-3/4 overflow-auto">
          <ParamsElement icon="attach_money" text="Salaire horaire" value={Number(user.wage)} valueType="currency" link="/account/params/edit/test" />
          <ParamsElement icon="attach_money" text="Vacances" value={Number(10.640)} valueType="percent" type="supplement" link="/account/params/edit/test" />
          <ParamsElement icon="attach_money" text="13ème salaire" value={Number(8.333)} valueType="percent" type="supplement" link="/account/params/edit/test" />
          <ParamsElement icon="attach_money" text="AVS" value={Number(5.300)} valueType="percent" type="deduction" link="/account/params/edit/test" />
          <ParamsElement icon="attach_money" text="AC" value={Number(1.100)} valueType="percent" type="deduction" link="/account/params/edit/test" />
          <ParamsElement icon="attach_money" text="LAA" value={Number(0.630)} valueType="percent" type="deduction" link="/account/params/edit/test" />
          <ParamsElement icon="attach_money" text="IJM" value={Number(0.600)} valueType="percent" type="deduction" link="/account/params/edit/test" />
        </div>
      }
    />
  );
}
