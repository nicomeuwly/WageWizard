import { ChangeEvent, useState, useRef, useEffect } from "react";

interface InputProps {
  type: "text" | "number" | "email" | "password";
  placeholder: string;
  autocomplete?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function TextInput(props: InputProps) {
  return (
    <input
      type={props.type}
      autoComplete={props.autocomplete}
      placeholder={props.placeholder}
      onChange={props.onChange}
      className="box-border bg-gray-2 w-3/4 border border-font-secondary rounded-2xl p-4 text-white focus:outline-none focus:border-yellow focus:ring-1 focus:ring-yellow focus:bg-transparent focus:placeholder-transparent caret-yellow"
    />
  );
}
