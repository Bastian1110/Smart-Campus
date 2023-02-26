import React from 'react';
import ImgEnc from '../assets/images/encst.jfif';
import CampusVirtual from '../assets/images/campusVirtual.png'
import ImgMcrft from '../assets/images/mncrt-tec.jpg';
import CardHerramienta from '../components/CardHerramienta';

function CardsHerramientas() {
    return (
        <>

<section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 ">
   <div className="container" >
      <div className="flex flex-wrap -mx-4 w-full ">
         <CardHerramienta 
         Img = {CampusVirtual} 
         titulo = 'Maqueta Virtual del Campus'
         descripcion = 'La maqueta virtual del campus nos permitirá estar en contacto, tener conversaciones y reuniones virtuales en diferentes puntos del campus. Expresarte a través de emociones, grabar videos de recorridos y diseñar juegos interactivos. Anímate a interactuar en este espacio.' 
         bgColor = '[#F0F8FF]'
         /> 
         <CardHerramienta 
         Img = {ImgEnc} 
         titulo = "Encuestas y Talleres Ciudadanos" 
         descripcion = 'En la página encontraremos encuestas y formularios que nos permitirán saber la opinión de todos. Los resultados quedarán abiertos para retroalimentar las ideas. ' 
         bgColor = '[#9acef8]'
         /> 
         <CardHerramienta 
         Img = {ImgMcrft} 
         titulo = "Minecraft" 
         descripcion = 'La idea de que el videojuego Minecraft puede usarse para la participación pública fue creada en 2012 por ONU-Hábitat, el programa de la ONU para la urbanización sostenible y el estudio de juegos sueco Mojang. Los talleres participativos, que usan Minecraft, reúnen a las personas para visualizar sus ideas y necesidades de diseño…¿Cómo podemos usarlo para desarrollar nuestras ideas? Escuchemos propuestas.' 
         bgColor = '[#c3e3fd]'
         /> 
      </div>
   </div>
</section>
        </>
    );
}

export default CardsHerramientas;