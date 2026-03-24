export default async function mylinksPage() {
    
  return (
    <div className="flex flex-col min-h-screen py-2 bg-gray-100">
      <nav className="flex flex-row justify-between bg-white shadow-md p-4">
        <h1 className="text-2xl text-gray-800 font-bold">EncurtaLink</h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Acessar
        </button>
      </nav>
    </div>
  );
}