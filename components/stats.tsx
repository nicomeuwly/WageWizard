export default function Stats() {
    return (
        <div className="flex flex-col justify-evenly items-center h-5/6">
            <h1 className="text-center font-bold bg-gray w-1/2 p-3 rounded-2xl">Septembre 2023</h1>
            <div className="flex flex-col items-center bg-gray w-11/12 p-3 rounded-2xl">
                <span className="material-symbols-rounded w-min text-6xl yellow-symbol">timer</span>
                <p className="font-semibold text-yellow">74:03</p>
            </div>
            <div className="flex flex-col items-center">
                <span className="material-symbols-rounded w-min text-6xl green-symbol">trending_up</span>
                <p className="font-semibold text-green">18:31</p>
            </div>
            <div className="flex flex-col items-center">
                <span className="material-symbols-rounded text-slate-50 w-min text-6xl silver-symbol">account_balance</span>
                <p className="font-semibold">CHF 1’971.71</p>
            </div>
        </div>
    );
}