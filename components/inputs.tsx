import { ChangeEvent, useState, useRef, useEffect } from "react";

interface InputProps {
  type: "text" | "number" | "email" | "password";
  placeholder: string;
  autocomplete?: string;
  error: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function TextInput(props: InputProps) {
  return (
    <input
      type={props.type}
      autoComplete={props.autocomplete}
      placeholder={props.placeholder}
      onChange={props.onChange}
      className={"box-border bg-gray-2 w-full border rounded-2xl p-4 focus:outline-none focus:border-yellow focus:ring-1 focus:ring-yellow focus:bg-transparent focus:placeholder-transparent caret-yellow " + (props.error ? " border-red text-red" : "border-font-secondary text-white")}  
    />
  );
}
