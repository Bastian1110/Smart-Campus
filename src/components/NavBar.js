import React, {useState} from "react";
import { Link } from "react-router-dom";
import {client, redirectUrl} from "../constants"
import Logo from "../assets/Logo.jpeg";

let authenticators = []
const listAllLogin = async () =>{
    const result = await client.Users.listAuthMethods();
    authenticators = result.authProviders 
}
listAllLogin()

const googleSignIn = async (event) =>{
    console.log("Authenticators : ",authenticators)
    localStorage.setItem("provider",JSON.stringify(authenticators))
    event.preventDefault()
    window.location.href = authenticators[0].authUrl + redirectUrl + "&prompt=consent"
}

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
      <div className="bg-white">
        <NavbarHelper menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        {menuOpen &&
          <MobileMenu>
            <Link to="/" className="no-underline text-gray-800 font-semibold hover:text-gray-600">Inicio</Link>
            <Link to="/nosotros" className="no-underline text-gray-800 font-semibold hover:text-gray-600">Nosotros</Link>
            <Link to="/proyectos" className="no-underline text-gray-800 font-semibold hover:text-gray-600">Proyectos</Link>
            <Link to="/resultados" className="no-underline text-gray-800 font-semibold hover:text-gray-600">Resultados</Link>
            <Link to="/herramientas" className="no-underline text-gray-800 font-semibold hover:text-gray-600">Lanza tu proyecto</Link>
            <Link to="/ods" className="no-underline text-gray-800 font-semibold hover:text-gray-600">ODS</Link>
            <button onClick={googleSignIn} className="mx-4 px-8 py-2 bg-indigo-600 text-white rounded-lg  shadow-sm hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-200">
                Mi Cuenta
            </button>
          </MobileMenu>}
      </div>
    );
  };
  
  const NavbarHelper = ({ menuOpen, setMenuOpen }) => (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center">
        <img src={Logo} alt="LogoTec" className="w-10 mr-2"/>
        <section>
            <a href="/" className="text-xl font-bold no-underline text-gray-800 hover:text-gray-600">CEM</a>
            <p className="-mt-1 ml-0.5">Campus Inteligente</p>
        </section>
      </div>
      <nav className="hidden md:block space-x-4">
        <Link to="/" className="no-underline text-gray-800 font-semibold hover:text-gray-600">Inicio</Link>
        <Link to="/nosotros" className="no-underline text-gray-800 font-semibold hover:text-gray-600">Nosotros</Link>
        <Link to="/proyectos" className="no-underline text-gray-800 font-semibold hover:text-gray-600">Proyectos</Link>
        <Link to="/resultados" className="no-underline text-gray-800 font-semibold hover:text-gray-600">Resultados</Link>
        <Link to="/herramientas" className="no-underline text-gray-800 font-semibold hover:text-gray-600">Lanza tu proyecto</Link>
        <Link to="/ods" className="no-underline text-gray-800 font-semibold hover:text-gray-600">ODS</Link>
        <button onClick={googleSignIn} className="mx-4 px-8 py-2 bg-indigo-600 text-white rounded-lg  shadow-sm hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-200">
            Mi Cuenta
        </button>
      </nav>
      <button type="button" aria-label="Toggle mobile menu" onClick={() => setMenuOpen(!menuOpen)} className="rounded md:hidden focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50"><MenuAlt4Svg menuOpen={menuOpen} /></button>
    </div>
  );
  
  const MobileMenu = ({ children }) => (
    <nav className="p-4 flex flex-col space-y-3 md:hidden">
      {children}
    </nav>
  );
  
  const MenuAlt4Svg = ({ menuOpen }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`transition duration-100 ease h-8 w-8 ${menuOpen ? 'transform rotate-90' : ''}`} viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
    </svg>
  );

  export default NavBar;