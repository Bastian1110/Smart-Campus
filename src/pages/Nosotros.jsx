import React from 'react';
import Carreras from '../components/Carreras';

function Nosotros() {
    return (
        <>
            
        <header className='text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 
                py-12 px-16 '>
            <section className="text-4xl font-bold mb-2 text-white">
                Nosotros
            </section>
            <section>
                <p className="text-left text-1xl py-5 font-family: noto sans font-medium  tracking-wide">
                Los alumnos del Campus Estado de México queremos aplicar los conceptos de una ciudad inteligente y estar conectados para proponer ideas y desarrollar proyectos de manera colectiva que nos permitan hacer del nuestro, un campus sostenible. En esta sección podrás encontrar información de las carreras que se encuentran en el Campus Estado de México, podrás ver un video dando clic en el nombre de la carrera que te gustaría conocer o conectar.
                </p>
            </section>
            <section>
                <p className="text-center text-2xl py-5 font-family:segoe UI Emoji font-medium italic">"Porque todos sabemos hacer cosas diferentes y tenemos diferentes habilidades, juntos podemos hacer más..."</p>
            </section>
        </header>
        
            <Carreras />
        </>
    );
}

export default Nosotros;