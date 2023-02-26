import React from "react";

function Socios1() {
    return(
        <>
        <section className="bg-white py-20 lg:py-[120px]">
   <div className="container">
      <div className="flex flex-wrap -mx-4">
         <div className="w-full px-4">
            <div className="flex flex-wrap justify-center items-center">
               <a
                  href="/"
                  className="
                  w-[150px]
                  2xl:w-[180px]
                  py-5
                  flex
                  items-center
                  justify-center
                  mx-4
                  "
                  >
               <img
                  src="http://sic.cultura.gob.mx/images/63017"
                  alt="foto"
                  className="w-full h-10"
                  />
               </a>
               <a
                  href="/"
                  className="
                  w-[150px]
                  2xl:w-[180px]
                  py-5
                  flex
                  items-center
                  justify-center
                  mx-4
                  "
                  >
               <img
                  src="https://www.cicae.com/wp-content/uploads/2019/10/The-Climate-Reality-Project-600x148.jpg"
                  alt="foto"
                  className="w-full h-10"
                  />
               </a>
               <a
                  href="/"
                  className="
                  w-[150px]
                  2xl:w-[180px]
                  py-5
                  flex
                  items-center
                  justify-center
                  mx-4
                  "
                  >
               <img
                  src="https://www.hubspot.es/hubfs/logo-exatec-azul.png"
                  alt="foto"
                  className="w-full h-10"
                  />
               </a>
               <a
                  href="/"
                  className="
                  w-[150px]
                  2xl:w-[180px]
                  py-5
                  flex
                  items-center
                  justify-center
                  mx-4
                  "
                  >
               <img
                  src="data:image/jpeg;base64,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"
                  alt="foto"
                  className="w-full h-10"
                  />
               </a>
            </div>
         </div>
      </div>
   </div>
</section>
        </>
    )
}

export default Socios1;