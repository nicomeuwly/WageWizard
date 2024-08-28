"use client";
import { useParams, useRouter } from "next/navigation";
import PageLayout from "@/components/pageLayout";
import { TextInput } from "@/components/inputs";
import { MainButton, SecondaryButton, SwitchButton } from "@/components/buttons";
import { useState, useRef, useEffect } from "react";
import { getUser } from "@/lib/userActions";

export default function EditParamPage() {
  const [isSupplement, setIsSupplement] = useState(true);
  const [error, setError] = useState(false);
  const [result, setResult] = useState<any>("");
  const [param, setParam] = useState<any>();
  const [user, setUser] = useState<any>();
  const name = useRef("");
  const value = useRef(0);
  const urlParams = useParams<{ paramsId: string }>();
  const router = useRouter();

  const getParam = async () => {
    try {
      const response = await fetch(`/api/salary/parameter/${urlParams.paramsId}`);
      const responseData = await response.json();
      if (response.ok) {
        setParam(responseData);
        setIsSupplement(responseData.type === "supplement");
      } else {
        throw new Error(responseData.error || "Unknown error occurred");
      }
    } catch (error) {
      setError(true);
      if (error instanceof Error) {
        setResult(error.message);
      } else {
        setResult("Quelque-chose n'a pas fonctionné...");
      }
    }
  };

  const deleteParam = async () => {
    try {
      const response = await fetch(`/api/salary/parameter/${urlParams.paramsId}`, {
        method: "DELETE",
      });
      const responseData = await response.json();
      if (response.ok) {
        router.push("/account/params");
      } else {
        throw new Error(responseData.error || "Unknown error occurred");
      }
    } catch (error) {
      setError(true);
      if (error instanceof Error) {
        setResult(error.message);
      } else {
        setResult("Quelque-chose n'a pas fonctionné...");
      }
    }
  };

  const handleToggle = (newSupplement: boolean) => {
    setIsSupplement(newSupplement);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    setResult("");
    try {
      const response = urlParams.paramsId !== "wage" ? await fetch(`/api/salary/parameter/${urlParams.paramsId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.current ? name.current : param.name,
          percentage: value.current ? value.current : param.percentage,
          type: isSupplement ? "supplement" : "deduction",
        }),
      }) : await fetch(`/api/user/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ hourlyWage: value.current ? value.current : user.wage }),
      });
      const responseData = await response.json();
      if (response.ok) {
        router.push("/account/params");
      } else {
        throw new Error(responseData.error || "Unknown error occurred");
      }
    } catch (error) {
      setError(true);
      if (error instanceof Error) {
        setResult(error.message);
      } else {
        setResult("Quelque-chose n'a pas fonctionné...");
      }
    }
  };

  useEffect(() => {
    urlParams.paramsId !== "wage" ? getParam() : null;
    getUser().then((user) => setUser(user));
  }, []);
  return (
    <PageLayout
      leftButton={["arrow_back_ios", "/account/params"]}
      rightButton={["", ""]}
      headerTitle="Paramètres du salaire"
      title="Modification de paramètre"
      subtitle={urlParams.paramsId === "wage" ? "secondary" : isSupplement ? "supplement" : "deduction"}
      subtitleText={urlParams.paramsId === "wage" ? "Salaire horaire" : ""}
      children={
        <div className="w-full h-3/4 flex flex-col items-center gap-6">
          {urlParams.paramsId === "wage" && user ?
            <form className="w-5/6 h-5/6 flex flex-col items-center justify-between" onSubmit={onSubmit}>
              <div className="w-full h-fit flex flex-col items-center gap-8">
                <TextInput type="number" placeholder={user.wage} label="Valeur (CHF)" error={false} onChange={(e) => (value.current = parseFloat(e.target.value))} />
                {error ? <p className="text-red">{result}</p> : null}
              </div>
              <MainButton text="Valider" size="small" type="submit" />
            </form> : null}
          {param ?
            <form className="w-5/6 h-5/6 flex flex-col items-center justify-between" onSubmit={onSubmit}>
              <div className="w-full h-fit flex flex-col items-center gap-8">
                <TextInput type="text" placeholder={param.name} label="Dénomination" error={false} onChange={(e) => (name.current = e.target.value)} />
                <TextInput type="number" placeholder={param.percentage} label="Valeur (%)" error={false} onChange={(e) => (value.current = parseFloat(e.target.value))} />
                <SwitchButton onToggle={handleToggle} paramType={param.type} />
                {error ? <p className="text-red">{result}</p> : null}
              </div>
              <div className="w-full flex gap-8">
                <MainButton text="Valider" size="small" type="submit" />
                <SecondaryButton text="Supprimer" size="small" type="button" onClick={deleteParam} />
              </div>
            </form> : null}
        </div>
      }
    />
  );
}
