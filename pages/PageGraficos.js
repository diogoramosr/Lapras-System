import React from 'react';
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Grafico from '../components/Graficos';

const PageGraficos = () => {
    return (
        <>
            <Head></Head>
            <Navbar />
                <div className="max-w-screen-xl px-4 py-6 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-lg mx-auto">
                    <h1 className='w-[50%] m-auto flex justify-center items-center bg-slate-500 rounded-lg'>GRAFICOS EM TEMPO REAL</h1>
                        <div className="p-8 mt-3 mb-0 space-y-4 flex justify-center items-center rounded-lg shadow-2xl bg-slate-500">
                            <div className="grid grid-cols-1 pl-24">
                                <Grafico />
                                <Grafico />
                                <Grafico />
                                <Grafico />
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </>
    )
}

export default PageGraficos