"use client";
import Button from "@/components/Button";
import { useFormState } from "react-dom";
import { handleForm } from "./action";

interface IInput {
  type: string;
  name: string;
  placeholder: string;
  required: boolean;
}

interface IMsg {
  text: string;
  textColor: string;
}

const Input = ({ type, name, placeholder, required }: IInput) => {
  return (
    <input
      className="p-1 px-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
    />
  );
};

const Msg = ({ text, textColor }: IMsg) => {
  return <p className={`${textColor} self-center`}>{text}</p>;
};

export default function Home() {
  const [state, action] = useFormState(handleForm, null);
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-3 ">
      <form className="flex flex-col gap-3 w-1/4" action={action}>
        <h1 className="self-center">Assignment26</h1>
        <Input
          type="email"
          name="email"
          placeholder="jhun@naver.com"
          required
        />
        <Input type="text" name="username" placeholder="username" required />
        <Input
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <Button text="login" />
        {state?.result === true ? (
          <Msg
            text="You have successfully logged in!"
            textColor="text-green-500"
          />
        ) : state?.result === false ? (
          <Msg text="Invalid password!" textColor="text-red-500" />
        ) : null}
      </form>
    </div>
  );
}
