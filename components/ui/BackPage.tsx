"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function BackPage() {
  const router = useRouter();

  return (
    <Link href="/pokedex" className="relative z-50 block">
      Voltar
    </Link>
  );
}
