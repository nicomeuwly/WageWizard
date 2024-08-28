"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { TextInput } from "./inputs";
import { CircleButton } from "./buttons";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

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
  const [error, setError] = useState(false);
  const [result, setResult] = useState<any>("");
  const dataToUpdate = useRef("");
  const router = useRouter();

  const closePanel = () => {
    setIsOpen(false);
    setError(false);
    setResult("");
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);
    setResult("");
    try {
      const response = await fetch(`/api/user/${props.userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ [props.fieldToUpdate]: dataToUpdate.current }),
      });
      const responseData = await response.json();
      if (response.ok) {
        setIsOpen(false);
        router.refresh();
        if (
          props.fieldToUpdate === "password" ||
          props.fieldToUpdate === "email"
        ) {
          signOut();
        }
      } else {
        throw new Error(responseData.error || "Unknown error occurred");
      }
    } catch (error) {
      setError(true);
      if (error instanceof Error) {
        setResult(error.message);
      } else {
        setResult("An unknown error occurred.");
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
      <div className="mb-12 w-full min-h-48 max-h-60 flex flex-col gap-6 items-center">
        <div className="flex items-center gap-4 w-full h-20 bg-gray-2 rounded-2xl">
          <span className="material-symbols-rounded flex justify-center items-center w-1/6 h-full text-4xl bg-gray-2 rounded-2xl">
            {props.icon}
          </span>
          <div className="flex w-9/12 items-center justify-between">
            {props.label}
            <span
              className="material-symbols-rounded aspect-square text-font-secondary rounded-full hover:bg-gray p-2"
              onClick={closePanel}
            >
              close
            </span>
          </div>
        </div>
        <form
          onSubmit={onSubmit}
          className="w-full px-6 flex flex-row items-center gap-6"
        >
          <TextInput
            type={props.type}
            placeholder={props.text}
            autocomplete={props.autocomplete}
            error={error}
            onChange={(e) => (dataToUpdate.current = e.target.value)}
          />
          <CircleButton icon="done" type="submit" />
        </form>
        {error ? <p className="text-red">{result}</p> : null}
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

export function ParamsElement(props: {
  icon: string;
  text: string;
  value: number;
  type?: string;
  valueType: string;
  link: string;
}) {
  const toDecimal = (num: number, nbDecimals: number) => {
      typeof num !== "number" ? num = parseFloat(num) : num;
      if(typeof nbDecimals !== "number") return;
      num = parseFloat(num.toString()) || 0;
      return num.toFixed(nbDecimals);
  }
  return (
    <div className="flex items-center gap-4 w-full h-20 bg-gray rounded-2xl mb-8">
      {!props.type ? (
        <span className="material-symbols-rounded flex justify-center items-center w-1/6 h-full text-4xl bg-gray-2 rounded-2xl">
          {props.icon}
        </span>
      ) : (
        <div className="relative flex justify-center items-center w-1/6 h-full bg-gray-2 rounded-2xl">
          <span className="material-symbols-rounded flex justify-center items-center text-4xl">
            {props.icon}
          </span>
          <span
            className={
              "material-symbols-rounded absolute bottom-3 right-2 flex justify-center items-center text-lg rounded-full h-7 w-7 text-gray border-4 border-gray-2 " +
              (props.type === "supplement" ? "bg-green" : "bg-red")
            }
          >
            {props.type === "supplement" ? "add" : "remove"}
          </span>
        </div>
      )}
      <div className="flex flex-row w-9/12 items-center">
        <p className="basis-3/6">{props.text}</p>
        <p className="basis-2/6 text-right">
          {props.valueType === "percent"
            ? toDecimal(props.value, 3) + "%"
            : "CHF " + toDecimal(props.value, 2)}
        </p>
        <Link href={props.link} className="flex justify-end basis-1/6 items-center aspect-square">
          <span className="material-symbols-rounded text-yellow p-2 hover:bg-gray-2 rounded-full">
            edit
          </span>
        </Link>
      </div>
    </div>
  );
}
