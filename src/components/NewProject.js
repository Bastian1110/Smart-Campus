import React, {useState} from "react";
import {client} from "../constants"
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

function NewProject(){
    const queryClient = useQueryClient();
    const {register, handleSubmit, formState: { errors }} = useForm()
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const addMutation = useMutation(
        (mutationData) =>{
            const formData = new FormData();

            formData.append('creador', client.authStore.model.id);
            formData.append('nombreProyecto', mutationData.nombreProyecto);
            formData.append('descripcion', mutationData.descripcion);
            formData.append('imagen', mutationData.imagen[0]);
            formData.append('pdf', mutationData.pdf[0]);
            formData.append('estatus', 2);

            return client.records.create('proyecto', formData);
        },
        {
            onSuccess: () =>{
                queryClient.invalidateQueries("newProyecto")
                console.log("New Project Sucess!")
                alert("Proyecto Creado!")
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
            <button type="button" onClick={handleOpen} className="mx-4 mt-8 px-8 py-4 bg-blue-500 text-white rounded-lg  shadow-sm hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-200">Nuevo Proyecto</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style} className="rounded-md">
                    <h1 className="font-bold text-2xl py-4">Crear Un Proyecto</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" {...register("nombreProyecto", { required: true })} placeholder="Nombre del Proyecto" className="my-4 w-full border-[1.5px] border-form-stroke rounded-lg py-3 px-5 font-medium text-body-color placeholder-body-color outline-none focus:border-primary active:border-primary transition disabled:bg-[#F5F7FD] disabled:cursor-default"/>
                        {errors.nombreProyecto && <span className="text-red-400">Debes asignar un nombre a tu proyecto 🤡</span>}
                        <textarea maxLength="350" rows="4" {...register("descripcion", { required: true })} placeholder="Descripción (500 caracteres máximo)" className="my-4 w-full border-[1.5px] border-form-stroke rounded-lg py-3 px-5 font-medium text-body-color placeholder-body-color outline-none focus:border-primary active:border-primary transition disabled:bg-[#F5F7FD] disabled:cursor-default"/>
                        {errors.nombreProyecto && <span className="text-red-400">Debes poner una descripción a tu proyecto 🤡</span>}    
                        <span className="text-red-400">Asegúrate de que el tamaño de tus archivos sea menor a 5MB, de lo contrario la creación de tu proyecto no será posible.</span>

                        <label className="font-medium text-base text-slate-400 block">
                            PDF del Proyecto
                        </label>
                        <input type="file" {...register("pdf")} className="mb-3 w-full border-[1.5px] border-form-stroke rounded-lg font-medium text-body-color placeholder-body-color outline-none focus:border-primary active:border-primary transition disabled:bg-[#F5F7FD] disabled:cursor-default cursor-pointer file:bg-[#F5F7FD] file:border-0 file:border-solid file:border-r file:border-collapse file:border-form-stroke file:py-3 file:px-5 file:mr-5 file:text-body-color file:cursor-pointer file:hover:bg-primary file:hover:bg-opacity-10"/>
                        <label className="font-medium text-base text-slate-400 block">
                            Imagen del Proyecto 
                        </label>
                        <input type="file" {...register("imagen")} className="mb-3 w-full border-[1.5px] border-form-stroke rounded-lg font-medium text-body-color placeholder-body-color outline-none focus:border-primary active:border-primary transition disabled:bg-[#F5F7FD] disabled:cursor-default cursor-pointer file:bg-[#F5F7FD] file:border-0 file:border-solid file:border-r file:border-collapse file:border-form-stroke file:py-3 file:px-5 file:mr-5 file:text-body-color file:cursor-pointer file:hover:bg-primary file:hover:bg-opacity-10"/>
                        <input type="submit" className="mx-4 px-8 py-2 bg-green-400 text-white rounded-lg  shadow-sm hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-200"/>
                    </form>
                </Box>
            </Modal>
    </div>
    )
}
export default NewProject