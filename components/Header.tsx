/* INDICACIÓN DE CLIENT COMPONENT:
  En Next.js (App Router), por defecto los componentes son de servidor.
  Como este Header necesita interactividad (clics y estados), usamos "use client".
*/
"use client"; 

// Importamos el Hook 'useState' para gestionar si el menú móvil está abierto o cerrado
import { useState } from 'react'; 
import Link from 'next/link';
import Image from 'next/image';
/* Importamos iconos de Lucide:
  - Menu: Las tres rayitas (hamburguesa).
  - X: El aspa para cerrar el menú.
*/
import { Menu, X } from 'lucide-react'; 

export default function Header() {
  /* ESTADO DEL MENÚ (INTERRUPTOR):
    - isOpen: Variable que vale true (abierto) o false (cerrado).
    - setIsOpen: Función que usamos para cambiar ese valor.
    - Inicialmente es 'false' porque el menú empieza cerrado.
  */
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white px-4 md:px-8 py-3 md:py-5 shadow-sm border-b border-gray-100">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* SECCIÓN IZQUIERDA: LOGO Y NOMBRE */}
        <Link href="/" className="flex items-center gap-2 md:gap-4 group">
          <Image 
            src="/logoPLato.png" 
            alt="Logo Play&Eat" 
            width={55} 
            height={55} 
            className="object-contain md:w-[70px] md:h-[70px]"
          />
          <h1 className="text-xl md:text-3xl font-extrabold flex items-center">
            <span className="text-secondary">Play</span>
            <span className="text-primary mx-0.5 md:mx-1">&</span>
            <span className="text-secondary">Eat</span>
          </h1>
        </Link>

        {/* NAVEGACIÓN PARA ESCRITORIO (PC)
            - hidden md:flex: Se oculta en móviles y se muestra en pantallas grandes.
        */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/login" className="text-secondary font-semibold hover:text-primary transition-colors">
            Iniciar Sesión
          </Link>
          <Link 
            href="/registro" 
            className="bg-primary text-white px-6 py-2.5 rounded-xl font-bold hover:bg-orange-600 transition-all shadow-md"
          >
            Registrarse
          </Link>
        </nav>

        {/* BOTÓN MÓVIL (SOLO VISIBLE EN SMARTPHONES)
            - onClick: Al pulsar, ejecutamos la lógica de inversión (!isOpen).
            - Renderizado condicional: Si isOpen es true, muestra la X. Si es false, el Menu.
        */}
        <button 
          className="md:hidden p-2 text-secondary focus:outline-none"
          onClick={() => setIsOpen(!isOpen)} 
          aria-label="Alternar menú"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENÚ DESPLEGABLE MÓVIL:
        - Esta sección solo se renderiza si 'isOpen' es verdadero.
        - animate-in: Pequeña animación de entrada para que no aparezca de golpe.
      */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          <Link 
            href="/login" 
            className="text-secondary font-semibold py-2 border-b border-gray-50"
            onClick={() => setIsOpen(false)} // Cerramos el menú tras hacer clic
          >
            Iniciar Sesión
          </Link>
          <Link 
            href="/registro" 
            className="bg-primary text-white px-6 py-3 rounded-xl font-bold text-center shadow-sm"
            onClick={() => setIsOpen(false)} // Cerramos el menú tras hacer clic
          >
            Registrarse
          </Link>
        </div>
      )}
    </header>
  );
}