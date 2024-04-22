export function TextInput(props: { placeholder: string }) {
  return (
    <input
      type="text"
      placeholder={props.placeholder}
      className="box-border bg-gray-2 w-3/4 border border-font-secondary rounded-2xl p-4 text-white focus:outline-none focus:border-yellow focus:ring-1 focus:ring-yellow focus:bg-transparent focus:placeholder-transparent caret-yellow"
    />
  );
}
