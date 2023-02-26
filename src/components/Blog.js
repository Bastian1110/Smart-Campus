import React from "react";
import Podcast from "../assets/Podcast.png";
import { Resbaladilla } from "../assets/blog";

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
                  <img src={Resbaladilla} alt="foto" className="w-full" />
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
                    20 Septiembre 2022
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
                      Inauguración del Proyecto "Cuidado Diversión"
                    </a>
                  </h3>
                  <p className="text-base text-body-color">
                    12:00am <br></br>
                    Escaleras de Aulas IV
                  </p>
                  <p className="text-base text-body-color">¡Inténtalo!</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="max-w-[370px] mx-auto mb-10">
                <div className="rounded overflow-hidden mb-8">
                  <img src={Podcast} alt="foto" className="w-full" />
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
                    29 Agosto 2022
                  </span>
                  <h3>
                    <a
                      href="https://open.spotify.com/episode/5J9nmPPY4XfwlTBm4OAADy?si=b2329887b4894a70"
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
                      Podcast "En Otro Plano"
                    </a>
                  </h3>
                  <p className="text-base text-body-color">
                    Entrevista con alumnos que nos hablan sobre el Campus
                    Inteligente<br></br>
                    Disponible{" "}
                    <a
                      href="https://open.spotify.com/episode/5J9nmPPY4XfwlTBm4OAADy?si=b2329887b4894a70"
                      className="font-bold hover:text-primary"
                    >
                      Aquí!
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 px-4">
              <div className="max-w-[370px] mx-auto mb-10">
                <div className="rounded overflow-hidden mb-8">
                  <img
                    src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-02.jpg"
                    alt="foto"
                    className="w-full"
                  />
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
                    25 Agosto 2022
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
                      Inauguración de la plataforma
                    </a>
                  </h3>
                  <p className="text-base text-body-color">
                    Presentado por alumnas y alumnos de Campus Inteligente y
                    Dra. Marisol Ugalde. <br></br>
                    Inauguración: Mtra. Verónica Pedrero y Mtro. Ramiro Estrada
                    <br></br>
                    11:00 am<br></br>
                    Explanada de CEDETEC
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
