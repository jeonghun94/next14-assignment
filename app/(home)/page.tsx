"use client";
import Button from "@/components/Button";
import { useFormState } from "react-dom";
import { handleForm } from "./action";
import { InputHTMLAttributes } from "react";

interface IInput {
  name: string;
  errors?: string[];
}

const Input = ({
  name,
  errors = [],
  ...rest
}: IInput & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="flex flex-col gap-2">
      <input
        name={name}
        className="px-3 bg-transparent rounded-md w-full h-10 focus:outline-none ring-2 focus:ring-4 transition ring-neutral-200 focus:ring-orange-500 border-none placeholder:text-neutral-400"
        {...rest}
      />
      {errors.map((error, index) => (
        <span key={index} className="text-red-500 font-medium">
          {error}
        </span>
      ))}
    </div>
  );
};

export default function Home() {
  const [state, action] = useFormState(handleForm, null);
  console.log(state);
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-3 ">
      <form className="flex flex-col gap-3 w-1/4" action={action}>
        <h1 className="self-center">Assignment27</h1>
        <Input
          type="email"
          name="email"
          placeholder="jhun@naver.com"
          errors={state?.fieldErrors?.email || []}
          required
        />
        <Input
          type="text"
          name="username"
          placeholder="username"
          errors={state?.fieldErrors?.username}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="password"
          errors={state?.fieldErrors?.password}
          required
        />
        <Button text="login" />
      </form>
    </div>
  );
}
