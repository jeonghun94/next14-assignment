"use client";
import Button from "@/components/Button";
import { useFormState } from "react-dom";
import { handleForm } from "./action";
import { Input } from "@/components/Input";
import Link from "next/link";

export default function Home() {
    const [state, action] = useFormState(handleForm, null);
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center gap-3 ">
            <form className="flex flex-col gap-3 w-1/4" action={action}>
                <h1 className="self-center">create tweet</h1>
                <Input
                    type="text"
                    name="tweet"
                    placeholder="ex: Hello, World!"
                    errors={state?.fieldErrors?.tweet || []}
                    required
                />
                <Button text="create" />
            </form>
        </div>
    );
}
