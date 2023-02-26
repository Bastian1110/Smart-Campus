import React from 'react';
import ListProyectos from "../components/ListProyectos"

function Proyectos() {
    return (
        <>
        <header className='text-white bg-gradient-to-r from-blue-500 to-violet-600 pt-12 pb-6 px-16 '>
            <section className="text-4xl font-bold mb-2 text-white">
                Proyectos En Desarrollo
            </section>
            <section>
                <p className="text-left text-1xl pt-5 pb-1 font-family: noto sans font-medium  tracking-wide"> 
                Aquí encontrarás las ideas propuestas por alumnos, profesores o colaboradores del campus. El propósito es que estas ideas se desarrollen y se conviertan en proyectos para su posible implementación en el campus. Si te interesa alguno podrás encontrar más información haciendo clic en alguna de las tarjetas. 
                </p>
            </section>
            <section>
                <p className="text-left text-1xl pt-3 font-family: noto sans font-medium  tracking-wide">
                Si tienes alguna idea que te gustaría que se desarrollara e implementara en el Campus, ingresa a <b>Mi Cuenta</b> en donde encontrarás las indicaciones para que puedas subirla y compartirla.
                </p>
            </section>
        </header>
        <ListProyectos/>
        </>
    );
}

export default Proyectos;