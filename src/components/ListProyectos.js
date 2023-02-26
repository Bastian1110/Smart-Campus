import React from "react";
import {client} from "../constants"
import { useQuery } from 'react-query';
import SaberMas from './SaberMas'

function ListProyectos(){
    const {data, status} = useQuery("proyectos", () => 
        client.records.getFullList('proyecto',200,{
            filter : 'estatus = 1'
    }))
    if(status === 'loading'){
        return <p> Cargando ...</p>
    }
    if(status === 'error'){
        return <p> Error! </p>
    }
    return(
        <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
            <div className="container">
                <div className="flex flex-wrap -mx-4">
                {data.map((proyecto) => (
                    <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                    <div className="bg-white rounded-lg overflow-hidden mb-10">
                    <img
                        src={"https://admin.campusinteligente.com/api/files/proyecto/" + proyecto.id + "/" + proyecto.imagen}
                        alt="foto"
                        className="w-full"
                    />
                    <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                        <h3>
                            <a
                                href="/"
                                className="font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block hover:text-primary">
                                {proyecto.nombreProyecto}
                            </a>
                        </h3>
                        <p className="text-base text-body-color leading-relaxed mb-7">
                            {proyecto.descripcion}
                        </p>
                        <SaberMas {...proyecto}/>
                    </div>
                </div>
             </div>
            ))}
            </div>
        </div>
    </section>
    )
}
export default ListProyectos