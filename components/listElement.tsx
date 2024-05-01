"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { TextInput } from "./inputs";
import { CircleButton } from "./buttons";
import { signOut } from "next-auth/react";

export function ListElement(props: {
  icon: string;
  text: string;
  userId: string;
  label: string;
  type: "text" | "number" | "email" | "password";
  autocomplete?: string;
  fieldToUpdate: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dataToUpdate = useRef("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(`/api/user/${props.userId}`, {
      method: "PUT",
      body: JSON.stringify({ [props.fieldToUpdate]: dataToUpdate.current }),
    });
    if (response.ok) {
      setIsOpen(false);
      if (props.fieldToUpdate === "password" || props.fieldToUpdate === "email") {
        signOut();
      }
    }
  };

  if (!isOpen) {
    return (
      <div className="flex items-center gap-4 w-full h-20 bg-gray rounded-2xl mb-8">
        <span className="material-symbols-rounded flex justify-center items-center w-1/6 h-full text-4xl bg-gray-2 rounded-2xl">
          {props.icon}
        </span>
        <div className="flex w-9/12 items-center justify-between">
          {props.text}
          <span
            className="material-symbols-rounded aspect-square text-yellow rounded-full hover:bg-gray-2 p-2"
            onClick={() => setIsOpen(true)}
          >
            edit
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="mb-12 w-full h-48 flex flex-col gap-8 items-center">
        <div className="flex items-center gap-4 w-full h-20 bg-gray-2 rounded-2xl">
          <span className="material-symbols-rounded flex justify-center items-center w-1/6 h-full text-4xl bg-gray-2 rounded-2xl">
            {props.icon}
          </span>
          <div className="flex w-9/12 items-center justify-between">
            {props.label}
            <span
              className="material-symbols-rounded aspect-square text-font-secondary rounded-full hover:bg-gray-2 p-2"
              onClick={() => setIsOpen(false)}
            >
              close
            </span>
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          className="w-11/12 flex flex-row items-center gap-8"
        >
          <TextInput
            type={props.type}
            placeholder={props.text}
            autocomplete={props.autocomplete}
            onChange={(e) => (dataToUpdate.current = e.target.value)}
          />
          <CircleButton icon="done" type="submit" />
        </form>
      </div>
    );
  }
}

export function LinkElement(props: {
  href: string;
  icon: string;
  text: string;
  style?: string;
}) {
  return (
    <Link
      href={props.href}
      className={
        "flex items-center gap-4 w-full h-20 bg-gray hover:bg-gray-2 " +
        props.style
      }
    >
      <span className="material-symbols-rounded flex justify-center items-center w-1/6 h-full text-4xl text-yellow">
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
