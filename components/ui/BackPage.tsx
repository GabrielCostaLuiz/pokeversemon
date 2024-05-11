"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoChevronBack } from "react-icons/io5";

export default function BackPage() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="relative z-50 flex items-center gap-1 text-red-500"
    >
      <IoChevronBack size={30} />
      Voltar
    </button>
  );
}
