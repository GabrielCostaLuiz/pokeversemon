import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section bg-blue_dark_secondary text-center">
      <h2 className="text-center text-3xl font-bold">PÁGINA EM MANUTENÇÃO</h2>
      <p className="mt-10">
        Aguarde a próximas atualizações do site para visualizar está página
      </p>
      <Link href="/" className="bg-red-500 rounded-xl p-5  block mt-5">
        Retornar para Home
      </Link>
    </div>
  );
}
