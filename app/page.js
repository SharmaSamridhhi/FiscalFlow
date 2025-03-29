"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import { useUser, UserButton } from "@clerk/nextjs";

export default function Home() {
  const { user, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/dashboard");
    }
  }, [isSignedIn]);

  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
}
