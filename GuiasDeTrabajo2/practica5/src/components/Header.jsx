import { Link, useLocation } from "react-router-dom";
import SearchForm from "./SearchForm";

export default function Header() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <header className={isHome ? "bg-[url('/bg.jpg')] bg-center bg-cover py-20" : "bg-slate-800"}>
      <div className="mx-auto container px-5">
        <div className="flex justify-between items-center">
          <img src="logo.svg" alt="logotipo" className="w-32" />

          <nav className="flex gap-4">
            <Link to="/" className="text-white uppercase font-bold">Inicio</Link>
            <Link to="/favoritos" className="text-white uppercase font-bold">Favoritos</Link>
          </nav>
        </div>

        {isHome && (
          <div className="flex justify-start mt-4"> 
            <SearchForm />
          </div>
        )}
      </div>
    </header>
  );
}
