import React from "react";

//Insert the revelant stuff about MetaVerse Campus & Info 
function HeroODS(){
    return(
        <div className="py-7 bg-gradient-to-r from-cyan-600 to-teal-500">
            <div className="container mx-auto px-6">
                <div>
                    <h2 className="text-4xl font-bold mb-2 text-white">
                        Evento especial
                    </h2>
                    <h3 className="text-2xl mb-8 text-gray-100">
                    El 25 de agosto <b>CEM Campus Inteligente</b> realizó el evento 'Museo presencial de las ODS's'
                    </h3>
                </div>

                <a href="/" className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider hover:bg-blue-600 hover:text-white">
                    ¡Entérate de más!
                </a>
            </div>
        </div>
    );
}
export default HeroODS;