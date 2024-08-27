"use client";
import Link from "next/link";

export default function Header(props: { title: string, leftButton: { icon: string, link: string }, rightButton: { icon: string, link: string } }) {
    let displayLeftButton: boolean = false;
    let displayRightButton: boolean = false;
    props.leftButton.icon && props.leftButton.link ? displayLeftButton = true : displayLeftButton = false;
    props.rightButton.icon && props.rightButton.link ? displayRightButton = true : displayRightButton = false;

    return (
        <header className="bg-gray p-5 w-full h-20 border-t-4 border-yellow flex flex-row items-center shadow-lg shadow-black/50">
            <Link href={props.leftButton.link} className={"text-left align-middle text-font-secondary " + (!displayLeftButton ? "pointer-events-none hidden" : "basis-[15%]")}><span className="material-symbols-rounded h-full align-middle aspect-square p-1 hover:bg-gray-2 rounded-full">{props.leftButton.icon}</span></Link>
            <h1 className={"text-xl font-bold text-center align-middle " + (!displayLeftButton && !displayRightButton ? "w-full" : "basis-[70%]")}>{props.title}</h1>
            <Link href={props.rightButton.link} className={"text-right align-middle text-font-secondary " + (!displayRightButton ? "pointer-events-none hidden" : "basis-[15%]")}><span className="material-symbols-rounded h-full align-middle aspect-square p-1 hover:bg-gray-2 rounded-full">{props.rightButton.icon}</span></Link>
        </header>
    )
}