export function CircleButton(props: {
  icon: string;
  onClick?: () => void;
  type?: "button" | "reset" | "submit" | undefined;
  style?: string;
}) {
  return (
    <button
      className={"aspect-square bg-yellow rounded-full p-2 h-full flex items-center justify-center hover:bg-yellow-2 " + (props.style ? " " + props.style : "")}
      onClick={props.onClick}
      type={props.type}
    >
      <span className="flex items-center material-symbols-rounded text-gray text-4xl h-full aspect-square">{props.icon}</span>
    </button>
  );
}