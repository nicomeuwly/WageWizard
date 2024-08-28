"use client";
import { MainButton, SwitchButton } from "@/components/buttons";
import { TextInput } from "@/components/inputs";
import PageLayout from "@/components/pageLayout";
import { useState, useRef } from "react";
import { getUser } from "@/lib/userActions";
import { useRouter } from "next/navigation";

export default function AddParamPage() {
    const [isSupplement, setIsSupplement] = useState(true);
    const [error, setError] = useState(false);
    const [result, setResult] = useState<any>("");
    const name = useRef("");
    const value = useRef(0);
    const router = useRouter();

    const handleToggle = (newSupplement: boolean) => {
        setIsSupplement(newSupplement);
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(false);
        setResult("");
        const user = await getUser();
        try {
            const response = await fetch("/api/salary/parameter", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: name.current,
                    percentage: value.current,
                    type: isSupplement ? "supplement" : "deduction",
                    userId: user.id,
                }),
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
    return (
        <PageLayout
            leftButton={["arrow_back_ios", "/account/params"]}
            rightButton={["", ""]}
            headerTitle="Paramètres du salaire"
            title="Nouveau paramètre"
            subtitle={isSupplement ? "supplement" : "deduction"}
            children={
                <div className="w-full h-3/4 flex flex-col items-center gap-6">
                    <form className="w-5/6 h-5/6 flex flex-col items-center justify-between" onSubmit={onSubmit}>
                        <div className="w-full h-fit flex flex-col items-center gap-8">
                            <TextInput type="text" placeholder="Nom du paramètre" label="Dénomination" error={false} onChange={(e) => (name.current = e.target.value)} />
                            <TextInput type="number" placeholder="0.00" label="Valeur (%)" error={false} onChange={(e) => (value.current = parseFloat(e.target.value))} />
                            <SwitchButton onToggle={handleToggle} />
                        </div>
                        <MainButton text="Valider" size="small" type="submit" />
                    </form>
                    {error ? <p className="text-red">{result}</p> : null}
                </div>
            }
        />
    );
}
