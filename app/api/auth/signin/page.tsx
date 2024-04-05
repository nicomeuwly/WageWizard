"use client";
import { LoginButton } from "@/components/auth";
import { signIn } from "next-auth/react";
import React, { useRef } from "react";

export default function SignInPage() {
  const email = useRef("");
  const password = useRef("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signIn("credentials", {
      email: email.current,
      password: password.current,
      redirect: true,
      callbackUrl: "/",
    });
  };

  return (
    <div className="flex flex-col h-full w-full gap-8 justify-center items-center">
      <img src="/logo.svg" alt="WageWizard logo"></img>
      <h1 className="text-2xl font-bold text-white">Connexion</h1>
      <form
        onSubmit={onSubmit}
        className="flex flex-col items-center w-full gap-8"
      >
        <input
          className="bg-gray-2 w-2/3 rounded-full p-4 text-white"
          type="text"
          name="email"
          placeholder="Adresse e-mail"
          onChange={(e) => (email.current = e.target.value)}
        />
        <input
          className="bg-gray-2 w-2/3 rounded-full p-4 text-white"
          type="password"
          name="password"
          placeholder="Mot de passe"
          onChange={(e) => (password.current = e.target.value)}
        />
        <LoginButton />
      </form>
    </div>
  );
}
