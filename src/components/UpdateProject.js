import React, {useState} from "react";
import {client} from "../constants";
import {useForm} from "react-hook-form"
import { useMutation, useQueryClient } from 'react-query';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'white',
  p: 4,
};

function UpdateProject({projectName, projectDescription, projectID, projectImage, projectPDF}){
    const queryClient = useQueryClient();
    const {register, handleSubmit, formState: { errors }} = useForm()
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const addMutation = useMutation(
        (mutationData) =>{
            

            const formData = new FormData();
            
            mutationData.nombreProyecto ? formData.append('nombreProyecto', mutationData.nombreProyecto) : formData.append('nombreProyecto', projectName);
            mutationData.descripcion ? formData.append('descripcion', mutationData.descripcion) : formData.append('descripcion', projectDescription);
            mutationData.imagen[0] ? formData.append('imagen', mutationData.imagen[0]) : formData.append('imagen', projectImage);
            mutationData.pdf[0] ? formData.append('pdf', mutationData.pdf[0]) : formData.append('pdf', projectPDF);

            return client.records.update('proyecto', projectID, formData);
        },
        {
            onSuccess: () =>{
                queryClient.invalidateQueries("updatedProyecto")
                console.log("Project updated!")
                alert("Proyecto actualizado!")
            },
            onError: (error) => {
                console.log(error);
            }
        }
    )

    const onSubmit = (data) => {
        addMutation.mutate(data)
    }
    
    return(
        <div>
            <button type="button" onClick={handleOpen} className="mx-auto my-4 inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white transition">Modificar proyecto</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style} className="rounded-md">
                    <h1 className="font-bold text-2xl py-4">Modifica tu proyecto</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input id="input_title" type="text" {...register("nombreProyecto", { required: false })} placeholder={projectName} className="my-4 w-full border-[1.5px] border-form-stroke rounded-lg py-3 px-5 font-medium text-body-color placeholder-body-color outline-none focus:border-primary active:border-primary transition disabled:bg-[#F5F7FD] disabled:cursor-default" />
                        {errors.nombreProyecto && <span className="text-red-400">Debes asignar un nombre a tu proyecto 🤡</span>}
                        <textarea maxLength="350" id="input_desc" rows="4" {...register("descripcion", { required: false })} placeholder={projectDescription} autocomplete="on" className="my-4 w-full border-[1.5px] border-form-stroke rounded-lg py-3 px-5 font-medium text-body-color placeholder-body-color outline-none focus:border-primary active:border-primary transition disabled:bg-[#F5F7FD] disabled:cursor-default"/>
                        {errors.nombreProyecto && <span className="text-red-400">Debes poner una descripción a tu proyecto 🤡</span>}    
                        <span className="text-red-400">Asegúrate de que el tamaño de tus archivos sea menor a 5MB, de lo contrario la actualización de tu proyecto no será posible.</span>

                        <label className="font-medium text-base text-slate-400 block">
                            Cambia el PDF de tu Proyecto
                        </label>
                        <input id="input_image" type="file" {...register("imagen")} className="mb-3 w-full border-[1.5px] border-form-stroke rounded-lg font-medium text-body-color placeholder-body-color outline-none focus:border-primary active:border-primary transition disabled:bg-[#F5F7FD] disabled:cursor-default cursor-pointer file:bg-[#F5F7FD] file:border-0 file:border-solid file:border-r file:border-collapse file:border-form-stroke file:py-3 file:px-5 file:mr-5 file:text-body-color file:cursor-pointer file:hover:bg-primary file:hover:bg-opacity-10"/>
                        <label className="font-medium text-base text-slate-400 block">
                            Cambia la Imagen de tu Proyecto 
                        </label>
                        <input id="input_file" type="file" {...register("pdf")} className="mb-3 w-full border-[1.5px] border-form-stroke rounded-lg font-medium text-body-color placeholder-body-color outline-none focus:border-primary active:border-primary transition disabled:bg-[#F5F7FD] disabled:cursor-default cursor-pointer file:bg-[#F5F7FD] file:border-0 file:border-solid file:border-r file:border-collapse file:border-form-stroke file:py-3 file:px-5 file:mr-5 file:text-body-color file:cursor-pointer file:hover:bg-primary file:hover:bg-opacity-10"/>
                        <input type="submit" className="mx-4 px-8 py-2 bg-green-400 text-white rounded-lg  shadow-sm hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-200"/>
                        <button onClick={handleClose} className="mx-4 px-8 py-2 bg-red-400 text-white rounded-lg  shadow-sm hover:bg-yellow-500 focus:ring-2 focus:ring-indigo-200">Cancelar</button>
                    </form>
                </Box>
            </Modal>
    </div>
    )
}
export default UpdateProject