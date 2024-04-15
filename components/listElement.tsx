"use client";

import Link from "next/link";
import { useState } from "react";
import { TextInput } from "./inputs";

export function ListElement(props: {
  icon: string;
  text: string;
  userId: string;
  label: string;
  fieldToUpdate: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <div className="flex items-center gap-4 w-full h-20	mb-8 bg-gray rounded-2xl">
        <span className="material-symbols-rounded flex justify-center items-center w-1/6 h-full text-4xl bg-gray-2 rounded-2xl">
          {props.icon}
        </span>
        <div className="flex w-9/12 items-center justify-between">
          {props.text}
          <span
            className="material-symbols-rounded text-yellow"
            onClick={() => setIsOpen(true)}
          >
            edit
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-between items-center gap-4 w-full h-60	mb-8 bg-gray rounded-2xl">
        <div className="w-full mt-8 flex flex-col items-center gap-4">
          <h2 className="w-3/4 font-bold text-yellow text-left">
            Modification du {props.label}
          </h2>
          <TextInput placeholder={props.text} />
        </div>
        <div className="flex flex-row gap-8 justify-evenly items-center w-full h-1/3 bg-gray-2 rounded-b-2xl">
          <span
            className="material-symbols-rounded flex items-center justify-center h-3/4 aspect-square p-2 bg-gray rounded-full text-4xl text-white"
            onClick={() => setIsOpen(false)}
          >
            close
          </span>
          <span
            className="material-symbols-rounded flex items-center justify-center h-3/4 aspect-square p-2 bg-gray rounded-full text-4xl text-yellow"
            onClick={() => setIsOpen(false)}
          >
            done
          </span>
        </div>
      </div>
    );
  }
}

export function LinkElement(props: {
  href: string;
  icon: string;
  text: string;
}) {
  return (
    <Link
      href={props.href}
      className="flex items-center gap-4 w-full h-20 bg-gray rounded-2xl"
    >
      <span className="material-symbols-rounded flex justify-center items-center w-1/6 h-full text-4xl bg-gray-2 rounded-2xl">
        {props.icon}
      </span>
      <div className="flex w-9/12 items-center justify-between">
        {props.text}
        <span className="material-symbols-rounded text-yellow">
          arrow_forward_ios
        </span>
      </div>
    </Link>
  );
}
