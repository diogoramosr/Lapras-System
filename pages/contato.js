import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Contato = () => {
  return (
    <div className="bg-zinc-100">
      <Head></Head>
      <Navbar />
      <div className="antialiased">
        <div className="flex w-full min-h-screen justify-center items-center">
          <div className="flex justify-between md:flex-row md:space-x-6 flex-col space-y-6 md:space-y-0  bg-white max-w-xxl p-8 sm:p-12 rounded-xl shadow-lg text-white mt-24 mb-10">
            <div className="flex flex-col justify-around">
              <div className="text-black">
                <h1 className="font-bold text-4xl tracking-wide">Contact us</h1>
                <p className="pt-2 text-black text-sm">
                  lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="flex flex-col space-y-4 mb-10 text-black">
                <div className="inline-flex space-x-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>+(55) 1234-1234</span>
                </div>
                <div className="inline-flex space-x-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>laprasSystem@gmail.com</span>
                </div>
                <div className="inline-flex space-x-2 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Campinas - Sp</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-20 text-lg text-black">
                <a href="">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="xl"
                    className="hover:text-sky-700 transition-all 400ms"
                  />
                </a>
                <a href="">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="xl"
                    className="hover:text-sky-700 transition-all 400ms"
                  />
                </a>
                <a href="">
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="xl"
                    className="hover:text-sky-700 transition-all 400ms"
                  />
                </a>
              </div>
            </div>
            <div>
              <div className="bg-sky-700 rounded-xl p-8 text-gray-600 ">
                <form action="POST" className="flex flex-col space-y-4">
                  <div className="flex justify-between items-center space-x-6">
                    <div>
                      <label className="text-sm text-white" for="">
                        Nome
                      </label>
                      <input
                        type="text"
                        placeholder="Nome"
                        className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-white"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-white" for="">
                        Email
                      </label>

                      <input
                        type="email"
                        placeholder="Email"
                        className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-white"
                      />
                    </div>
                  </div>
                  <div className="flex justify-between items-center space-x-2">
                    <div>
                      <label className="text-sm text-white" for="">
                        Telefone
                      </label>
                      <input
                        type="telephone"
                        placeholder="Telefone"
                        className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-white"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-white" for="">
                        Pessoa
                      </label>
                      <select
                        id="country"
                        name="country"
                        autocomplete="country-name"
                        class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-white"
                      >
                        <option>Pessoa Física</option>
                        <option>Pessoa Jurídica</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-white" for="">
                      Assunto
                    </label>
                    <input
                      type="text"
                      placeholder="Assunto"
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-1 outline-none focus:ring-2 focus:ring-white"
                    />
                  </div>

                  <div>
                    <label className="text-sm text-white" for="">
                      Message
                    </label>

                    <textarea
                      placeholder="Message"
                      rows="4"
                      className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-white"
                    ></textarea>
                  </div>
                  <button className="inline-block self-end bg-black hover:bg-gradient-to-r from-black to-sky-900  text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contato;
