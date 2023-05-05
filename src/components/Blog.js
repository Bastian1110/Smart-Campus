import React from "react";
import {recicla, ciclista, rodada } from "../assets/blog";

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
                  <img src={rodada} alt="foto" className="w-full" />
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
                    Viernes 19 de Mayo
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
                     Primera Rodada CEM 2023 
                    </a>
                  </h3>
                  <a className="text-base text-body-color">
                    8:00 am - 6:00 pm <br/>
                    Pedalea por un campus más sostenible <br/>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="max-w-[370px] mx-auto mb-10">
                <div className="rounded overflow-hidden mb-8">
                  <img src={recicla} alt="foto" className="w-full" />
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
                    21 de Abril 2023
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
                      Recicla Tec
                    </span>
                  </h3>
                  <p className="text-base text-body-color">
                    8:00 a 17:00 horas <br />
                    Plaza borregos <br/>
                    Recicla tec te invita a participar en el primer evento nacional del Reciclaje.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="max-w-[370px] mx-auto mb-10">
                <div className="rounded overflow-hidden mb-8">
                  <img src={ciclista} alt="foto" className="w-full" />
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
                    21 de abril 2023
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
                      ¿Hacia dónde avanza la infraestructura ciclista en México?
                    </a>
                  </h3>
                  <p className="text-base text-body-color">
                    10:30 a 14:30 horas <br/>
                    Formato virtual <br/>
                    Conoce Las experiencias desde diversas perspectivas y localidades <br/>
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
