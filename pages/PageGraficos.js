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
                <div className='h-screen flex items-center justify-center bg-black-bluack'>
                    <div className='h-[200px] w-[700px] bg-white box-border p-8 rounded-lg flex flex-col items-center'>
                    <h1 className='py-2'>Graficos de Temperaturas em Tempo Real</h1>
                        <form className='flex justify-center items-center'>
                                <Grafico />
                        </form>
                    </div>
                </div>
            <Footer />
        </>
    )
}

export default PageGraficos