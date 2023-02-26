import React from 'react';
import ods from '../assets/objetivos/ods.jpg'
import CardList from '../components/CardList';
import HeroODS from '../components/HeroODS'

function Ods() {
    return (
        <div>
            <HeroODS />
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-0'>
                    <div className='flex justify-center'>
                        <img src={ods} alt="ODS 2030" className='flex max-w-sm mx-auto my-8'/>
                    </div>
                    <div className='pt-10 justify-center'>
                        <h1 className='text-center lg:text-left lg:text-2xl sm:text-l py-4 mr-16'><b>¿Por qué hablamos de los ODS's en el Campus Inteligente?</b></h1>
                        <p className='text-center lg:text-left mr-14'>
                        En el año 2015 los estados miembros de la ONU, en conjunto con ONG's y ciudadanos de todo el mundo, generaron una propuesta para desarrollar 17 Objetivos de Desarrollo Sostenible (ODS) y 169 metas, los cuales buscan alcanzar de manera equilibrada tres dimensiones del desarrollo sostenible: el ámbito económico, social y ambiental. Si orientamos nuestras ideas y proyectos a esta agenda internacional, vamos a contribuir positivamente en diferentes escalas, a nivel campus, a nivel institución, a nivel local e internacional.
                        </p>
                    </div>
                </div>
            </div>
            <CardList image="https://www.un.org/sites/un2.un.org/files/styles/large-article-image-style-16-9/public/field/image/children-uttar_pradesh-india.jpg?itok=a-L5MjVj" gradient={"bg-gradient-to-r from-rose-700 to-red-400"} title={"Objetivo 1: Fin de la pobreza"} text={["Para lograr este objetivo de acabar con la pobreza, el crecimiento económico debe ser inclusivo,", <br />,"con el fin de crear empleos sostenibles y de promover la igualdad."]} />
            <CardList image="https://thefoodtech.com/wp-content/uploads/2022/06/hambre-cero-1536x1022.jpg" gradient={"bg-gradient-to-r from-orange-500 to-yellow-300"} title={"Objetivo 2: Hambre cero"} text={["El sector alimentario y el sector agrícola ofrecen soluciones claves para el desarrollo", <br />, "y son vitales para la eliminación del hambre y la pobreza."]} />

            <CardList image="https://repeatingislands.files.wordpress.com/2010/05/vaccinat1.jpg" gradient={"bg-gradient-to-r from-lime-800 to-emerald-500"} title={"Objetivo 3: Salud y bienestar"} text={["Para lograr los Objetivos de Desarrollo Sostenible,", <br />, "es fundamental garantizar una vida saludable y promover el bienestar universal."]} />
            <CardList image="https://www.unicef.org/mexico/sites/unicef.org.mexico/files/styles/hero_mobile/public/Andy%20Richter%20ZinacantanEscuelaPrimeria%20%2814%29.jpg?itok=Cd1mQwCH" gradient={"bg-gradient-to-r from-red-800 to-red-500"} title={["Objetivo 4: Educación de calidad"]} text={["La educación es la base para mejorar nuestra vida y el desarrollo sostenible."]} />
            
            <CardList image="https://c1.staticflickr.com/1/744/23134241776_35d16993a2_h.jpg" gradient={"bg-gradient-to-r from-orange-600 via-orange-500 to-amber-300"} title={"Objetivo 5: Igualdad de género"} text={["La igualdad entre los géneros no es solo un derecho humano fundamental,", <br />, "sino la base necesaria para conseguir un mundo pacífico, próspero y sostenible."]} />
            <CardList image="https://www.iagua.es/sites/default/files/styles/thumbnail-1180x647/public/idrica-agua-ods.jpg?itok=KK-9V5bP" gradient={"bg-gradient-to-r from-sky-500 via-sky-700 to-blue-400"} title={["Objetivo 6: Agua limpia y saneamiento"]} text={["El agua libre de impurezas y accesible para todos", <br />, "es parte esencial del mundo en que queremos vivir."]} />
            
            <CardList image="https://www.ecoticias.com/wp-content/uploads/2022/01/186-84.jpg" gradient={"bg-gradient-to-r from-orange-400 via-yellow-400 to-amber-300"} title={["Objetivo 7: Energía asequible y no contaminante"]} text={["La energía es central para casi todos los grandes desafíos", <br />, "y oportunidades a los que se enfrenta el mundo en la actualidad."]} />
            <CardList image="https://la.network/wp-content/uploads/2017/09/TRABAJADORES-EN-TRANVIA.jpg" gradient={"bg-gradient-to-r from-red-800 via-red-600 to-orange-400"} title={["Objetivo 8: Trabajo decente y crecimiento", <br />, "económico"]} text={["Debemos reflexionar sobre este progreso lento y desigual y revisar nuestras políticas económicas", <br />, "y sociales destinadas a erradicar la pobreza."]} />
            
            <CardList image="https://torsesa.com/wp-content/uploads/2022/06/silhouette-group-of-worker-and-civil-engineer-in-safety-uniform-install-reinforced-steel-scaled.jpg" gradient={"bg-gradient-to-r from-rose-800 via-amber-600 to-orange-400"} title={"Objetivo 9: Industria, innovación e infraestructura"} text={["Las inversiones en infraestructura son fundamentales para lograr un desarrollo sostenible."]} />
            <CardList image="https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2017/11/06-04-2014Colombia.jpg" gradient={"bg-gradient-to-r from-fuchsia-700 via-pink-400 to-rose-400"} title={"Objetivo 10: Reducción de las desigualdades"} text={["Reducir la desigualdad en y entre los países."]} />

            <CardList image="https://img.blogs.es/anexom/wp-content/uploads/2018/10/dinamarca-bicis-portada.jpg" gradient={"bg-gradient-to-l from-amber-500 via-red-500 to-yellow-500"} title={"Objetivo 11: Ciudades y comunidades sostenibles"} text={["Las inversiones en infraestructura son cruciales para lograr el desarrollo sostenible."]} />
            <CardList image="https://ojoalclima.com/wp-content/uploads/2021/06/1F8A1067-scaled-1.jpeg" gradient={"bg-gradient-to-r from-orange-900 via-amber-700 to-orange-400"} title={"Objetivo 12: Producción y consumo responsables"} text={["El objetivo del consumo y la producción sostenibles es hacer más y mejores cosas con menos recursos."]} />

            <CardList image="https://www.planetajardineria.es/wp-content/uploads/2022/05/manif-climat-163400.jpeg" gradient={"bg-gradient-to-l from-lime-500 via-green-700 to-green-600"} title={"Objetivo 13: Acción por el clima"} text={["El cambio climático es un reto global que no respeta las fronteras nacionales."]} />
            <CardList image="https://elfaroga.files.wordpress.com/2020/05/img_tamiguet_20200328-202549_imagenes_lv_otras_fuentes_no_archivables_ballena_jorobada-k9h-u48250736095dd-992x55840lavanguardia-web.jpg" gradient={"bg-gradient-to-l from-teal-400 via-blue-500 to-indigo-600"} title={"Objetivo 14: Vida submarina"} text={["Conservar y utilizar en forma sostenible los océanos,", <br />, "los mares y los recursos marinos para el desarrollo sostenible."]} />

            <CardList image="https://espaciociencia.com//wp-content/uploads/ecosistemas-terrestres-medio-fisico-natural-istock.jpg" gradient={"bg-gradient-to-l from-yellow-300 via-lime-400 to-lime-700"} title={"Objetivo 15: Vida de ecosistemas terrestres"} text={["Gestionar sosteniblemente los bosques, luchar contra la desertificación,", <br />, "detener e invertir la degradación de las tierras y detener la pérdida de biodiversidad."]} />
            <CardList image="https://i.ibb.co/4FS4dGP/sdg-cover-16.jpg" gradient={"bg-gradient-to-r from-cyan-800 to-blue-500"} title={"Objetivo 16: Paz, justicia e instituciones sólidas"} text={["Acceso universal a la justicia y la construcción de instituciones responsables", <br />, "y eficaces a todos los niveles."]} />

            <CardList image="https://economipedia.com/wp-content/uploads/Alianzas-para-lograr-los-objetivos.jpg" gradient={"bg-gradient-to-l from-blue-700 via-blue-800 to-gray-900"} title={"Objetivo 17: Alianzas para lograr objetivos"} text={["Revitalizar la Alianza Mundial para el Desarrollo Sostenible."]} />
        </div>
    );
}

export default Ods;