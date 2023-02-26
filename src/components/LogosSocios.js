import React from "react";
import Exatec from "../assets/images/Exatec.png";
import Sigsa from "../assets/images/Sigsa.jpg";
import LeaderShip from "../assets/images/LeaderShip.png";

function LogosSocios(){
    return (
        <div>
            <div className="flex mx-auto">
              <div className="py-0.5 self-center animate-fade-in-down">
                <img src={Sigsa} alt="SIGSA" className="img-responsive mx-[80%] w-70 h-30"/>
              </div>
              <div className="py-0.5 self-center animate-fade-in-down">
                <img src={LeaderShip} alt="The Climate Change Org" className="img-responsive mx-[130%] my-20 w-60 h-30"/>
              </div>
              <div className="py-0.5 self-center animate-fade-in-down">
                <img src={Exatec} alt="Exatec" className="img-responsive mx-[105%] w-96 h-30"/>
              </div>
            </div>
        </div>
    );
}

export default LogosSocios;
