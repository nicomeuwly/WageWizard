export function CircleButton(props: {
  icon: string;
  onClick: () => void;
}) {
  return (
    <button
      className="aspect-square bg-yellow rounded-full p-2 h-full flex items-center justify-center hover:bg-yellow-2"
      onClick={props.onClick}
    >
      <span className="material-symbols-rounded text-gray text-4xl">{props.icon}</span>
    </button>
  );
}