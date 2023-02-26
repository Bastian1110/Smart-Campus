import React from "react";
import {client} from "../constants"
import { useQuery } from 'react-query';
import UpdateProject from "./UpdateProject";



function UserProjects(){
    const {data, status} = useQuery("proyectosUser", () => 
        client.records.getFullList('proyecto',200,{
            filter : "creador = '" + client.authStore.model.id + "'"  
    }))
    if(status === 'loading'){
        return <p> Cargando ...</p>
    }
    if(status === 'error'){
        return <p> Error! </p>
    }
    return(
    <>
    <div className="bg-white pb-20 lg:py-[60px]">
        <div className="container">
            <div className="flex flex-wrap -mx-2">
                <div className="w-full px-4">
                    <div className="max-w-full overflow-x-auto">
                    <h3 className=" font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 4xl:text-[22px] mb-4 block">Mis Proyectos</h3>
                        <table className="table-auto w-full">
                            <thead>
                                <tr className="bg-primary text-center">
                                    <th
                                    className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-4 px-3 lg:px-4 border-l border-transparent">
                                    Nombre
                                    </th>
                                    <th
                                    className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-4 px-3 lg:px-4 border-l border-transparent">
                                    Estatus
                                    </th>
                                    <th
                                    className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-4 px-3 lg:px-4 border-l border-transparent">
                                    PDF
                                    </th>
                                    <th
                                    className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-4 px-3 lg:px-4 border-l border-transparent">
                                    Modificar
                                    </th>
                                    <th
                                    className="w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-4 px-3 lg:px-4 border-l border-transparent">
                                    Calificación
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                    {data.map((proyecto) =>(
                                        <tr>
                                        <td
                                        className=" text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8] " >
                                        {proyecto.nombreProyecto}
                                        </td>
                                        <td
                                        className=" text-center text-dark font-medium text-base py-5 px-2 bg-white border-b border-[#E8E8E8] " >
                                        {proyecto.estatus === 1 ? "Aprobado ✅" : "Evaluando 🫧"}
                                        </td>
                                        <td
                                        className=" text-center text-dark font-medium text-base py-5 px-2 bg-white border-b border-[#E8E8E8] " >
                                        <a href={"https://admin.campusinteligente.com/api/files/proyecto/" + proyecto.id + "/" + proyecto.pdf} download={proyecto.nombreProyecto} className="mx-auto my-4 inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white transition">Descargar</a>
                                        </td>
                                        <td
                                        className=" text-center text-dark font-medium text-base py-5 px-2 bg-white border-b border-[#E8E8E8] " >
                                        <UpdateProject projectName={proyecto.nombreProyecto} projectDescription={proyecto.descripcion} projectID={proyecto.id} projectImage={proyecto.imagen} projectPDF={proyecto.pdf}/>
                                        </td>
                                        <td
                                        className=" text-center text-dark font-medium text-base py-5 px-2 bg-white border-b border-[#E8E8E8] " >
                                        {proyecto.estatus === 1 ? "-" : proyecto.calificacionProyecto}
                                        </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default UserProjects