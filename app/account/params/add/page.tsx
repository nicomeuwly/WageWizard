import PageLayout from "@/components/pageLayout";

export default async function AddParamPage() {
    return (
        <PageLayout
            leftButton={["arrow_back_ios", "/account/params"]}
            rightButton={["", ""]}
            headerTitle="Paramètres du salaire"
            title="Nouveau paramètre"
            subtitle="supplement"
            children={
                <div className="w-full h-3/4 overflow-auto"></div>
            }
        />
    );
}
