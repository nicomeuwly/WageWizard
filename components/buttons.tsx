"use client";
import { useEffect, useState } from "react";

export function MainButton(props: {
  text: string;
  type: "button" | "submit";
  size: "small" | "large";
  onClick?: () => void;
}) {
  return (
    <button
      className={"h-12 bg-yellow rounded-lg font-bold text-gray text-xl flex items-center justify-center hover:bg-yellow-2" + (props.size === "large" ? " w-5/6" : " w-1/2")}
      onClick={props.onClick}
      type={props.type}
    >
      {props.text}
    </button>
  );
}

export function SecondaryButton(props: {
  text: string;
  type: "button" | "submit";
  size: "small" | "large";
  onClick?: () => void;
}) {
  return (
    <button
      className={"h-12 bg-white rounded-lg font-bold text-gray text-xl flex items-center justify-center hover:bg-white/50" + (props.size === "large" ? " w-5/6" : " w-1/2")}
      onClick={props.onClick}
      type={props.type}
    >
      {props.text}
    </button>
  );
}

export function CircleButton(props: {
  icon: string;
  onClick?: () => void;
  type?: "button" | "reset" | "submit" | undefined;
  style?: string;
}) {
  return (
    <button
      className={"aspect-square bg-yellow rounded-full p-2 h-12 flex items-center justify-center hover:bg-yellow-2 " + (props.style ? " " + props.style : "")}
      onClick={props.onClick}
      type={props.type}
    >
      <span className="flex items-center material-symbols-rounded text-gray text-3xl aspect-square">{props.icon}</span>
    </button>
  );
}

type SwitchButtonProps = {
  onToggle: (newSupplement: boolean) => void;
  paramType?: string;
};

export function SwitchButton({ onToggle, paramType }: SwitchButtonProps) {
  const [supplement, setSupplement] = useState(true);
  const handleClick = () => {
    const newSupplement = !supplement;
    setSupplement(newSupplement);
    onToggle(newSupplement);
  };
  useEffect(() => {
    if (paramType) {
      setSupplement(paramType === "supplement");
    }
  }, [paramType]);
  return (
    <button className="w-1/2 h-12 bg-gray rounded-lg flex" onClick={handleClick} type="button">
      <span className={"material-symbols-rounded text-4xl rounded-lg w-1/2 h-full flex items-center justify-center " + (supplement ? "bg-yellow text-gray" : "text-font-secondary")}>add</span>
      <span className={"material-symbols-rounded text-4xl rounded-lg w-1/2 h-full flex items-center justify-center " + (supplement ? "text-font-secondary" : "bg-yellow text-gray")}>remove</span>
    </button>
  );
}