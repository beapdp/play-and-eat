// 1. Importamos el componente SearchBar que creamos antes
// El símbolo '@' suele apuntar a la carpeta 'src' o raíz de tu proyecto
import SearchBar from '../components/SearchBar';

/* El nombre de la función puede ser 'Home' sin problemas */
export default function Home() {
  return (
    /* Quitamos el 'p-6' y el texto de prueba para meter el diseño real.
       Añadimos 'flex flex-col items-center' para que el buscador esté centrado. */
    <main className="flex flex-col items-center py-10 md:py-20 px-4">
      
      {/* 2. Llamamos al buscador azul.
          Él ya trae dentro su propio título: "Disfruta de la Sobremesa..."
      */}
      <SearchBar />

     

    </main>
  );
}