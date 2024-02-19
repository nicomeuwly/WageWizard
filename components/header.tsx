export default function Header({ title }: any) {
    return <header className="bg-bg-gray p-5 w-full h-16 border-b-2 border-purple flex flex-row justify-between">
        <div>Bouton 1</div>
        <h1 className="font-bold">{ title }</h1>
        <div>Bouton 2</div>
    </header>;
}
