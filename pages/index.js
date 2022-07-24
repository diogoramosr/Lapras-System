import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Site do sistema Lapras System" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Lapras System" />
        <title>Lapras System - Home</title>
      </Head>
      <Navbar />
      <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
        <div className="text-center space-y-4">
          <h1 className="text-black font-bold text-4xl md:text-5xl">
            Evolução é se preocupar com o meio ambiente.
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto text-2xl leading-relaxed">
            Para conscientização e vida.
            <br /> 
            <span className="text-sky-700"> Lapras System</span>
          </p>
        </div>
        <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
          <a
            href="/contato"
            className="px-10 py-3.5 w-full bg-sky-700 text-white text-center rounded-md shadow-md block sm:w-auto hover:scale-105 transition-all 500ms"
          >
            Adquira agora
          </a>
          <a
            href="/projeto"
            className="px-10 py-3.5 w-full text-gray-500 text-center border rounded-md duration-300 hover:text-sky-700 hover:shadow block sm:w-auto hover:scale-105"
          >
            Saber mais
          </a>
        </div>
      </section>
    </>
  );
}
