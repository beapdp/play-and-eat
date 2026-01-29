import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-light shadow-sm p-4 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-primary">
        Play&Eat
      </Link>

      {/* Navegación */}
      <nav className="space-x-6 font-medium text-secondary">
        <Link
          href="/restaurantes"
          className="hover:text-primary transition-colors"
        >
          Buscar
        </Link>

        <Link
          href="/login"
          className="hover:text-primary transition-colors"
        >
          Entrar
        </Link>

        <Link
          href="/registro"
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-accent transition-colors"
        >
          Registro
        </Link>
      </nav>
    </header>
  );
}
