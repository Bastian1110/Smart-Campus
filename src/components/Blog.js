import React from "react";
import { ForoDeEconomia, Basura, podcast } from "../assets/blog";

function Blog() {
  return (
    <>
      <section className="pt-0 lg:pt-[60px] pb-0 lg:pb-0">
        <div className="container">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                <span className="font-semibold text-lg text-primary mb-2 block">
                  Eventos
                </span>
                <h2
                  className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                >
                  Nuestros eventos recientes
                </h2>
                <p className="text-base text-body-color"></p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="max-w-[370px] mx-auto mb-10">
                <div className="rounded overflow-hidden mb-8">
                  <img src={podcast} alt="foto" className="w-full" />
                </div>
                <div>
                  <span
                    className="
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     "
                  >
                    23 Marzo 2023
                  </span>
                  <h3>
                    <a
                      href="/"
                      className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        "
                    >
                      Extreno de Contra reloj. Temporada 5 episodio 1. 
                    </a>
                  </h3>
                  <a className="text-base text-body-color">
                  Encuentralo en sportify con el siguiente link: <br></br>
                  </a>
                  <a href="https://open.spotify.com/episode/4nYs5TLnRie4zzVnn4YzYg?si=fSE_Ozc8Q4OuUStgz2SuWA" className="text-base text-body-color hover:text-primary">https://open.spotify.com/episode/4nYs5TLnRie4zzVnn4YzYg?si=fSE_Ozc8Q4OuUStgz2SuWA</a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="max-w-[370px] mx-auto mb-10">
                <div className="rounded overflow-hidden mb-8">
                  <img src={Basura} alt="foto" className="w-full" />
                </div>
                <div>
                  <span
                    className="
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     "
                  >
                    10 de Marzo 2023
                  </span>
                  <h3>
                    <span
                      className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        "
                    >
                      ¿Qué hacemos con la basura?
                    </span>
                  </h3>
                  <p className="text-base text-body-color">
                    10:00 am. <br />
                    Conferencia con Isaac Peraire I Soler, Director de la
                    Agencia de Residuos de Cataluña
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="max-w-[370px] mx-auto mb-10">
                <div className="rounded overflow-hidden mb-8">
                  <img src={ForoDeEconomia} alt="foto" className="w-full" />
                </div>
                <div>
                  <span
                    className="
                     bg-primary
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     "
                  >
                    3 de Marzo 2023
                  </span>
                  <h3>
                    <a
                      href="/"
                      className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        "
                    >
                      Uniendo acciones para la emergencia climatica
                    </a>
                  </h3>
                  <p className="text-base text-body-color">
                    Uniendo acciones para la emergencia climatica <br></br>
                    Conferencia Magistral, foros, talleres, exposiciones y
                    activaciones.
                    <br></br>
                    9:00 a 18:00 horas<br></br>
                    Centro de congresos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
