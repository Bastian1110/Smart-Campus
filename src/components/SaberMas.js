import React, {useState} from "react";
import {client} from "../constants";
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

function RateProject(rating, proyect){
    if(proyect.calificaciones){
        const newRatingList = proyect.calificaciones.calificaciones;
        newRatingList.push(rating);
        const avgRating = parseFloat((newRatingList.reduce((a, b) => a + b, 0) / newRatingList.length).toFixed(2)) || 0;
        
        return client.records.update('proyecto', proyect.id, {"calificaciones": {"calificaciones": newRatingList}, "calificacionProyecto": avgRating, "popularidad": newRatingList.length}); 
    }

    const ratingList = [rating];

    return client.records.update('proyecto', proyect.id, {"calificaciones": {"calificaciones": ratingList}, "calificacionProyecto": rating, "popularidad": ratingList.length});
    
}

function StarRating ({proyect}){
    const [rating, setRating] = useState(0);
    return (
        <div>
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <button
                        type="button"
                        key={index}
                        className={index <= rating ? "text-yellow-400" : "text-slate-400"}
                        onClick={() => setRating(index)}
                        onDoubleClick={() => setRating(0)}
                    >
                        <span
                        className="text-4xl"
                        >&#9733;</span>
                    </button>
                );
            })}
            <br />
            <button onClick={() => {
                RateProject(rating, proyect);
                alert("¡Gracias por calificar el proyecto! Tu opinión nos importa mucho");
            }} 
            className="mx-auto my-4 inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white transition">Calificar</button>
        </div>
    );
};

function SaberMas(proyect){
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
        <div>
            <button type="button" onClick={handleOpen} className="inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white transition">Saber Más</button>
            <Modal 
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style} className="rounded-md">
                <h1 className="font-bold text-2xl py-4">{proyect.nombreProyecto}</h1>
                <p>En esta sección están los recursos de cada proyecto.</p>   
                {proyect.pdf !== "" && 
                    <section className="mt-2">
                        <p className="font-bold">Descarga el PDF para saber más del proyecto 😁</p>
                        <a href={"https://admin.campusinteligente.com/api/files/proyecto/" + proyect.id + "/" + proyect.pdf} download={proyect.nombreProyecto} className="mx-auto my-4 inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white transition">Descargar</a>
                        <p className="font-bold">¿Ya leíste el PDF? Califica el proyecto</p>
                        <StarRating proyect={proyect}/>
                    </section>
                }
                {proyect.encuesta !== "" && 
                    <section className="mt-2">
                        <p className="font-bold">Responde la encuesta del proyectA 🥺</p>
                        <a href={proyect.encuesta} className="mx-auto my-4 inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white transition">Ir a la Encuesta</a>
                    </section>
                }
                </Box>
            </Modal>
        </div>
    )
}

export default SaberMas