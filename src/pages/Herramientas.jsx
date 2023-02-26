import React from 'react';
import CardsHerramientas from '../components/CardsHerramientas';
import RecursosConectar from '../components/recursosContectar';
import Service from '../components/Service';

function Herramientas() {
    return (
        <>
        <header className='text-white bg-gradient-to-r from-blue-800 to-blue-400
                pt-14 px-16 pb-3 '>
            <section className="text-4xl font-bold mb-2 text-white">
                Recursos... Para Conectar
            </section>
            <section>
                <p className="text-left text-1xl py-5 font-family: noto sans font-medium  tracking-wide">
                    Con estas herramientas podrás dar tu opinión o compartir información sobre diferentes ideas y proyectos propuestos por otras
                    compañeras y compañeros. Y también serán los medios a través de los cuales podrás obtener información para tus propias
                    propuestas, proyectos o ideas. Con estas herramientas podemos codiseñar y prototipar las propuestas.
                </p>
            </section>
        </header>

         <RecursosConectar/>
         <Service/>
         <section>
                <p className="mb-6 text-lg font-normal text-gray-700 lg:text-2xl sm:px-10 xl:px-48 text-center">
                    Con estas herramientas podrás dar tu opinión o compartir información sobre diferentes ideas y proyectos propuestos por otras
                    compañeras y compañeros. Y también serán los medios a través de los cuales podrás obtener información para tus propias
                    propuestas, proyectos o ideas. Con estas herramientas podemos codiseñar y prototipar las propuestas.
                </p>
            </section>
        <CardsHerramientas/>
        </>
    );
}

export default Herramientas;