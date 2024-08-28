import { ChangeEvent } from "react";

interface InputProps {
  type: "text" | "number" | "email" | "password";
  placeholder: string;
  label?: string;
  autocomplete?: string;
  error: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function TextInput(props: InputProps) {
  return (
    <div className="w-full flex flex-col gap-1 text-font-secondary focus-within:text-yellow">
      {props.label ? <label className="transition-colors duration-200">{props.label}</label> : null}
      <input
        type={props.type}
        autoComplete={props.autocomplete}
        placeholder={props.placeholder}
        onChange={props.onChange}
        step="any"
        className={"box-border bg-gray-2 w-full border rounded-2xl p-4 focus:outline-none focus:border-yellow focus:ring-1 focus:ring-yellow focus:bg-transparent focus:placeholder-transparent caret-yellow transition-colors duration-200" + (props.error ? " border-red text-red" : "border-font-secondary text-white")}
      />
    </div>
  );
}
