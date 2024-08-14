import Link from "next/link";

export default function Button({ text }: { text: string }) {
    return <Link href={"/tweets/add"}>{"➕ Add"}</Link>;
}
