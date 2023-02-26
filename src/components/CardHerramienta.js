

function CardHerramienta(props) {
    var classFirstDiv = `w-full md:w-1/2 lg:w-1/3 p-4 bg-${props.bgColor} shadow-xl hover:scale-105`;
    return (
        <>
        <div className={classFirstDiv}>
            <div className="max-w-[370px] mx-auto mb-10">
               <div className="rounded overflow-hidden mb-8">
                  <img
                     src={props.Img}
                     alt="foto"
                     className="w-full"
                     />
               </div>
               <div>
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
                        hover:text-black
                        "
                        >
                     {props.titulo}
                     </a>
                  </h3>
                  <p className="text-base text-body-color">
                  {props.descripcion}
                  </p>
               </div>
            </div>
         </div>
        </>
    );
}

export default CardHerramienta;