import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Grafico from "../components/Graficos";

const PageGraficos = () => {
  return (
    <>
      <Head></Head>
      <div className="w-full mx-auto bg-red-100">
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center">
          <div className="grid grid-cols-1 gap-2 justify-items-center items-center bg-blue-200">
            <Grafico />
            <Grafico />
            <Grafico />
            <Grafico />
          </div>
        </div>
      </div>
    </>
  );
};

export default PageGraficos;
