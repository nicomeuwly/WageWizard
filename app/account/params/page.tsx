"use client";
import { getUser } from "@/lib/userActions";
import { ParamsElement } from "@/components/listElement";
import PageLayout from "@/components/pageLayout";
import { useEffect, useState } from "react";

export default function ParamsPage() {
  const [params, setParams] = useState<any[]>([]);
  const [user, setUser] = useState<any>();
  const [totalPerParams, setTotalPerParams] = useState<any>({});
  const countBy = (arr: any[], prop: string) => arr.reduce((prev, curr) => (prev[curr[prop]] = ++prev[curr[prop]] || 1, prev), {});

  const getParams = async () => {
    try {
      const user = await getUser();
      const response = await fetch(`/api/salary/parameter?userId=${user.id}`);
      const responseData = await response.json();
      if (response.ok) {
        setParams(responseData);
        setUser(user);
        const count = countBy(responseData, "type");
        setTotalPerParams(count);
      } else {
        throw new Error(responseData.error || "Unknown error occurred");
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getParams();
  }, []);

  return (
    <PageLayout
      leftButton={["arrow_back_ios", "/account"]}
      rightButton={["add", "/account/params/add"]}
      headerTitle="Paramètres du salaire"
      title="Liste des paramètres"
      subtitle="params"
      params={[totalPerParams.supplement, totalPerParams.deduction]}
      children={
        <div className="w-full h-3/4 overflow-auto">
          {user ? <ParamsElement icon="attach_money" text="Salaire horaire" value={user.wage} valueType="currency" link="/account/params/edit/wage" /> : null}
          {params.map((param, index) => (
            <ParamsElement key={index} icon="attach_money" text={param.name} value={Number(param.percentage)} valueType="percent" type={param.type} link={`/account/params/edit/${param.id}`} />
          ))}
        </div>
      }
    />
  );
}
