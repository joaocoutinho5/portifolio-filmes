export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-64px)] text-center">
      <h1 className="text-5xl font-bold mb-6 text-[#e50914]">404</h1>
      <p className="text-xl text-white mb-3">
        Opss...
      </p>
      <p className="text-xl text-white mb-6">
        Parece que a página que você tentou acessar não existe 😢
      </p>
    </div>
  );
}
