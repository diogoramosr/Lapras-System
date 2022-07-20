import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head></Head>
      <Navbar />
      <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
        <div className="text-center space-y-4">
          <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
            Optimize your website for
            <span className="text-indigo-600"> Lapras System</span>
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum
          </p>
        </div>
        <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
          <a
            href="javascript:void(0)"
            className="px-10 py-3.5 w-full bg-sky-700 text-white text-center rounded-md shadow-md block sm:w-auto hover:scale-105 transition-all 500ms"
          >
            Adquira agora
          </a>
          <a
            href="javascript:void(0)"
            className="px-10 py-3.5 w-full text-gray-500 text-center border rounded-md duration-300 hover:text-sky-700 hover:shadow block sm:w-auto hover:scale-105"
          >
            Saber mais
          </a>
        </div>
      </section>
    </>
  );
}
