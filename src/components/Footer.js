import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-6 pt-10 pb-6">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 text-center md:text-center">
            <h5 className="uppercase mb-6 font-bold">Links</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a
                  href="/creditos"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                >
                  Colaboradores
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="/"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                >
                  Help
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="/"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-center">
            <h5 className="uppercase mb-6 font-bold">Legal</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a
                  href="/creditos"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                >
                  Créditos
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="https://tec.mx/es/avisos-de-privacidad"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                >
                  Aviso de Privacidad
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-center">
            <h5 className="uppercase mb-6 font-bold">Social</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a
                  href="https://www.facebook.com/TecCEM"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                >
                  Facebook
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="https://www.instagram.com/tec_cem/"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-center">
            <h5 className="uppercase mb-6 font-bold">Company</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a
                  href="/proyectos"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                >
                  About Us
                </a>
              </li>
              <li className="mt-2">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    alert(
                      "Dr. Marisol Ugalde : 55 7928 8545 Mail : marisol.ugalde@tec.mx"
                    );
                  }}
                  className="hover:underline text-gray-600 hover:text-orange-500"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
