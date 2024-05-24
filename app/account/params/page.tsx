import Header from "@/components/header";
import { getUser } from "@/lib/userActions";
import { ParamsElement } from "@/components/listElement";
import { CircleButton } from "@/components/buttons";

export default async function Params() {
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
        title="Paramètres du salaire"
        leftButton={leftButton}
        rightButton={rightButton}
      />
      <div className="p-5 flex flex-col items-center h-full relative">
        <div className="pb-8 flex flex-col items-center gap-2">
          <h1 className="text-xl font-bold text-center align-middle">
            Liste des paramètres
          </h1>
          <div className="flex flex-col items-center">
            <p className="text-font-secondary">
              Suppléments : <span className="text-green">2</span>
            </p>
            <p className="text-font-secondary">
              Déductions : <span className="text-red">2</span>
            </p>
          </div>
        </div>
        <div className="w-full h-3/4 overflow-auto">
          <ParamsElement icon="attach_money" text="Salaire horaire" value={Number(user.wage)} valueType="currency" link="/account/params/edit/test"/>
          <ParamsElement icon="attach_money" text="Vacances" value={Number(10.640)} valueType="percent" type="supplement" link="/account/params/edit/test"/>
          <ParamsElement icon="attach_money" text="13ème salaire" value={Number(8.333)} valueType="percent" type="supplement" link="/account/params/edit/test"/>
          <ParamsElement icon="attach_money" text="AVS" value={Number(5.300)} valueType="percent" type="deduction" link="/account/params/edit/test"/>
          <ParamsElement icon="attach_money" text="AC" value={Number(1.100)} valueType="percent" type="deduction" link="/account/params/edit/test"/>
          <ParamsElement icon="attach_money" text="LAA" value={Number(0.630)} valueType="percent" type="deduction" link="/account/params/edit/test"/>
          <ParamsElement icon="attach_money" text="IJM" value={Number(0.600)} valueType="percent" type="deduction" link="/account/params/edit/test"/>
        </div>
        <div className="absolute bottom-12 w-full h-20 bg-gradient-to-t from-black to-transparent"></div>
        <CircleButton icon="add" style="absolute bottom-16 h-fit"/>
      </div>
    </>
  );
}
