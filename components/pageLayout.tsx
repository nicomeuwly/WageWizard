import Header from "@/components/header";

export default async function PageLayout(props: { leftButton: any[], rightButton: any[], headerTitle: string, title: string, subtitle?: string, subtitleText?: string, online?: boolean, params?: number[], children: React.ReactNode }) {
    const subtitles: { [key: string]: JSX.Element } = {
        supplement: <h2 className="text-center align-middle text-green">Supplément</h2>,
        deduction: <h2 className="text-center align-middle text-red">Déduction</h2>,
        secondary: <h2 className="text-center align-middle text-font-secondary">{props.subtitleText}</h2>,
        status: <h2 className="flex flex-row items-center gap-2 text-font-secondary">
            <div className="bg-green w-3 h-3 rounded-full"></div>
            {props.online ? "En ligne" : "Hors ligne"}
        </h2>,
        params: <div className="flex flex-col items-center">
            <p className="text-font-secondary">
                Suppléments : <span className="text-green">{props.params?.[0] ?? 0}</span>
            </p>
            <p className="text-font-secondary">
                Déductions : <span className="text-red">{props.params?.[1] ?? 0}</span>
            </p>
        </div>
    };

    return (
        <>
            <Header
                title={props.headerTitle}
                leftButton={{ icon: props.leftButton[0], link: props.leftButton[1] }}
                rightButton={{ icon: props.rightButton[0], link: props.rightButton[1] }}
            />
            <div className="p-5 flex flex-col items-center h-full relative">
                <div className="h-28 flex flex-col items-center gap-2">
                    <h1 className="text-xl font-medium text-center align-middle">
                        {props.title}
                    </h1>
                    {props.subtitle ? subtitles[props.subtitle] : null}
                </div>
                {props.children}
            </div>
        </>
    );
}