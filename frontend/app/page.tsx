import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen py-2 bg-gray-100">
      <nav className="flex flex-row justify-between bg-white shadow-md p-4">
        <h1 className="text-2xl text-gray-800 font-bold">EncurtaLink</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Acessar
        </button>
      </nav>
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold text-gray-800">
          Bem-vindo ao <span className="text-blue-500">EncurtaLink!</span>
        </h1>
        <p className="mt-3 text-2xl text-gray-600">
          O melhor serviço de encurtamento de links.
        </p>
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="#"
            className="w-96 mt-6 sm:w-full flex flex-col items-center justify-center rounded-xl border text-gray-700 hover:text-gray-900 focus:text-gray-900"
          >
            <h3 className="text-2xl font-bold">Encurtar Link &rarr;</h3>
            <p className="mt-4 text-xl">
              Encurte seus links longos em segundos.
            </p>
          </a>
          <a
            href="#"
            className="w-96 mt-6 sm:w-full flex flex-col items-center justify-center rounded-xl border text-gray-700 hover:text-gray-900 focus:text-gray-900"
          >
            <h3 className="text-2xl font-bold">Gerenciar Links &rarr;</h3>
            <p className="mt-4 text-xl">
              Veja e gerencie seus links encurtados facilmente.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
