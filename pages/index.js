import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head></Head>
      <Navbar />
      <div className="h-screen flex items-center justify-center ">
        <div className="grid md:grid-cols-2 max-w-[1240px] items-center m-auto">
          <div className="px-2 py-8 h-full text-black">
            <h1 className="py-3 text-5xl mt-10 mb-2 md:text-7xl font-bold">
              Lapras System
            </h1>
            <p className="text-2xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum,
              necessitatibus labore! Aliquam ducimus fugit sit inventore nobis
              architecto magni minus.
            </p>
            <div className="flex items-center gap-6 mt-5 text-white">
              <a href="/projeto"> 
                <button className="py-3 px-6 sm-w-[40%] my-4 rounded-md hover:scale-105 transition-all 500ms  bg-sky-700 hover:scale-105">
                  Saber mais
                </button>
              </a>
              <a href="/contato">
                <button className="py-3 px-6 sm-w-[40%] my-4 rounded-md hover:scale-105 transition-all 500ms  bg-sky-700 hover:scale-105">
                  Adquira agora
                </button>
              </a>
            </div>
          </div>
          <div>
            <img className="w-full" src="images/arduino.jpg" alt="Arduino" />
          </div>
        </div>
      </div>
    </>
  );
}
