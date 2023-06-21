import React from "react";
import { useState, useEffect } from "react";
import { client } from "../constants";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function getGraphData(data, doughnutInfo) {
  const optionsBar = {
    responsive: true,
    mantainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Proyectos mejor calificados",
      },
      legend: {
        display: false,
      },
      tooltips: {
        enabled: false,
      },
    },
  };

  const dataBar = {
    labels: [
      data[0].nombreProyecto,
      data[1].nombreProyecto,
      data[2].nombreProyecto,
      data[3].nombreProyecto,
      data[4].nombreProyecto,
    ],
    datasets: [
      {
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 173, 0.2)",
          "rgba(75, 192, 151, 0.2)",
          "rgba(75, 192, 102, 0.2)",
          "rgba(81, 192, 75, 0.2)",
        ],
        borderColor: [
          "rgb(75, 192, 192)",
          "rgb(75, 192, 173)",
          "rgb(75, 192, 151)",
          "rgb(75, 192, 102)",
          "rgb(81, 192, 75)",
        ],
        borderWidth: 2,
        data: [
          data[0].calificacionProyecto,
          data[1].calificacionProyecto,
          data[2].calificacionProyecto,
          data[3].calificacionProyecto,
          data[4].calificacionProyecto,
        ],
      },
    ],
  };

  const optionsDoughnut = {
    responsive: true,
    mantainAspectRatio: false,
    plugins: {
      title: {
        display: true,
        text: "Proyectos más populares",
      },
    },
  };

  const dataDoughnut = {
    labels: [
      doughnutInfo[0].nombreProyecto,
      doughnutInfo[1].nombreProyecto,
      doughnutInfo[2].nombreProyecto,
      doughnutInfo[3].nombreProyecto,
      doughnutInfo[4].nombreProyecto,
    ],
    datasets: [
      {
        label: "Proyectos mejor calificados",
        backgroundColor: [
          "rgba(0, 166, 180, 0.6)",
          "rgba(0, 108, 180, 0.6)",
          "rgba(0, 36, 180, 0.6)",
          "rgba(60, 0, 180, 0.6)",
          "rgba(104, 0, 180, 0.6)",
        ],
        hoverBackgroundColor: [
          "rgb(0, 166, 180)",
          "rgb(0, 108, 180)",
          "rgb(0, 36, 180)",
          "rgb(60, 0, 180)",
          "rgb(104, 0, 180)",
        ],
        borderWidth: 0,
        data: [
          doughnutInfo[0].popularidad,
          doughnutInfo[1].popularidad,
          doughnutInfo[2].popularidad,
          doughnutInfo[3].popularidad,
          doughnutInfo[4].popularidad,
        ],
      },
    ],
  };

  return {
    optionsBar: optionsBar,
    optionsDoughnut: optionsDoughnut,
    dataBar: dataBar,
    dataDoughnut: dataDoughnut,
  };
}

function Resultados() {
  const [data, setData] = useState([
    { nombreProyecto: "Proyecto", calificacionProyecto: 0 },
    { nombreProyecto: "Proyecto", calificacionProyecto: 0 },
    { nombreProyecto: "Proyecto", calificacionProyecto: 0 },
    { nombreProyecto: "Proyecto", calificacionProyecto: 0 },
    { nombreProyecto: "Proyecto", calificacionProyecto: 0 },
  ]);
  const [doughnutInfo, setdoughnutInfo] = useState([
    { nombreProyecto: "Proyecto", popularidad: 0 },
    { nombreProyecto: "Proyecto", popularidad: 0 },
    { nombreProyecto: "Proyecto", popularidad: 0 },
    { nombreProyecto: "Proyecto", popularidad: 0 },
    { nombreProyecto: "Proyecto", popularidad: 0 },
  ]);

  useEffect(() => {
    async function getData() {
      const result = await client.records.getFullList("proyecto", 100, {
        sort: "-calificacionProyecto",
      });

      setData(result);

      const result2 = await client.records.getFullList("proyecto", 100, {
        sort: "-popularidad",
      });

      setdoughnutInfo(result2);
    }

    getData();
  }, []);

  const { optionsBar, optionsDoughnut, dataBar, dataDoughnut } = getGraphData(
    data,
    doughnutInfo
  );

  return (
    <>
      <div>
        <header className="text-white bg-gradient-to-r from-red-600 to-violet-600 pt-12 pb-6 px-16 ">
          <section className="text-5xl text-left font-sans font-medium tracking-wide ">
            Resultados de Nuestros Proyectos
          </section>
          <section>
            <p className="text-left text-1xl pt-5 pb-1 font-family: noto sans font-medium  tracking-wide">
              {" "}
              Para saber cuáles son los proyectos más populares aprobados se
              publicaran gráficas, las cuales nos permitirán conocer las
              opiniones de nuestros compañeros, además de obtener más
              información para desarrollar nuestros proyectos.
            </p>
          </section>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1esO4F_MpWpCWam3nr-YZbS-WiOW2KAha/view?usp=sharing"
            className="bg-gradient-to-r from-blue-600 to-violet-600 text-white p-6 font-semibold m-8 rounded-xl w-[70%] mx-auto text-2xl hover:scale-105 duration-500 transition-all hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-400"
          >
            Resultados Rodada 2023
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1FoO1yfPn95kOhUzFSsAQPN-kMWc-TCLY/view?usp=sharing"
            className="bg-gradient-to-r from-blue-600 to-violet-600 text-white p-6 font-semibold m-8 rounded-xl w-[70%] mx-auto text-2xl hover:scale-105 duration-500 transition-all hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600"
          >
            Resultados Museo ODS
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 w-full place-items-center">
        <div className="w-2/5 h-72 p-8">
          <Bar options={optionsBar} data={dataBar} />
        </div>
        <div className="w-96 h-96 p-8">
          <Doughnut options={optionsDoughnut} data={dataDoughnut} />
        </div>
      </div>
    </>
  );
}

export default Resultados;
