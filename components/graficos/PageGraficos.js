import React from "react";
import Head from "next/head";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Grafico from "./Graficos";
import BarChart from "./BarChart";

const PageGraficos = () => {
  return (
    <>
      <Head></Head>
      <div className="w-full h-full flex justify-around items-center flex-wrap">
        <div className="w-full h-full">
          <Grafico />
        </div>
      </div>
    </>
  );
};

export default PageGraficos;
