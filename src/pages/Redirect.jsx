import React, { useEffect, useState }from "react";
import {client, redirectUrl} from "../constants"
import NewProject from "../components/NewProject";
import NoUser from '../assets/images/NoUser.png'
import UserProjects from "../components/UserProjects";

const params = (new URL(window.location)).searchParams;
const providerRaw = localStorage.getItem('provider')
let provider = ""
if(providerRaw){
    provider = JSON.parse(providerRaw)
}

const logOut = (event) =>{
    event.preventDefault()
    client.authStore.clear()
    window.location.href = "/"
}

function Redirect(){
    const [user, setUser] = useState(null);
    useEffect(() => {
        client.Users.authViaOAuth2(
            provider[0].name,
            params.get("code"),
            provider[0].codeVerifier,
            redirectUrl
        ).then((authdata)=>{
            setUser(authdata.meta)
            console.log("Sucess!")
        }).catch(err=>console.log("Panic ? [Ingnore]",err))
    });
    return(
        <>
        <div className="w-full float-left md:w-1/2 xl:w-1/3 px-4 drop-shadow-md inline-block mb-20">
            <div className="bg-white rounded-lg overflow-hidden mb-10">
                <img src={NoUser} alt="No Avatar" className="max-w-xs mx-auto"/>
               <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3 className=" font-semibold text-dark text-xl sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px] mb-4 block">
                  Hola !
                  </h3>
                  <p className="text-base text-body-color leading-relaxed mb-7">
                     En este apartado de la pagina web, podras administrar y ver tus proyectos!
                  </p>
                  <button 
                     onClick={logOut}
                     className=" inline-block py-2 px-7 border border-[#E5E7EB] rounded-full text-base text-body-color font-medium hover:border-primary hover:bg-primary hover:text-white transition">
                  Cerrar Sesion
                  </button>
               </div>
            </div>
         </div>
         <div className="mb-2">
            <span className="m-6 mb-0 text-lg"> Para crear el PDF de tu nuevo proyecto, usa esta 
                <a className="font-semibold text-blue-500" href={require("../assets/files/Formato-CampusInteligente.docx")} download="Formato-Campus-Inteligente"> Plantilla</a>.
            </span>
            <NewProject/>
         </div>
         <div className="w-full mb-10 md:w-1/2 xl:w-2/3 inline-block">
            <div className="bg-white rounded-lg overflow-hidden mb-2">
                <UserProjects/>
            </div>
         </div>
        </>
    )
}

export default Redirect;