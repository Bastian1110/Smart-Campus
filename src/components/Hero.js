import React from "react";

//Insert the revelant stuff about MetaVerse Campus & Info 
function Hero(){
    return(
        <div className="py-10 bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="container mx-auto px-6">
                <div className="pt-4">
                    <h2 className="text-4xl font-bold mb-2 text-white">
                        Maqueta Virtual
                    </h2>
                    <h3 className="text-2xl mb-8 text-gray-200">
                        Adéntrate en la maqueta virtual para participar en distintas actividades.
                    </h3>
                </div>

                <a href="https://hubs.mozilla.com/NoB6ZRq/ante-sala/" className="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
                    ¡Entrar!
                </a>
            </div>
        </div>
    );
}
export default Hero;