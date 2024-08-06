import { useFormStatus } from "react-dom";

export default function Button({ text }: { text: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      className="rounded-md p-1 bg-slate-500 text-white px-16"
      disabled={pending}
    >
      {pending ? "Loading..." : text}
    </button>
  );
}
