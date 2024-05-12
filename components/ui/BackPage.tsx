"use client";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { IoChevronBack } from "react-icons/io5";

export default function BackPage() {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      className="relative z-30 flex items-center gap-1 text-red-500"
    >
      <IoChevronBack size={30} />
      Voltar
    </Button>
  );
}
