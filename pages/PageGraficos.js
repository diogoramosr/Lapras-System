import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Grafico from "../components/Graficos";

const PageGraficos = () => {
  return (
    <>
      <Head></Head>
      <div className="w-full mx-auto h-full">
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 items-center" >
          <div className="w-full">
            <div className=" flex justify-between items-center flex-wrap w-full">
            <Grafico/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageGraficos;
