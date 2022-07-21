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
    <div className="">
      <Head></Head>
      <Navbar />

      <section class="bg-gray-100">
        <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div class="lg:py-12 lg:col-span-2 flex flex-col">
              <h1 className="font-bold text-5xl mb-4">Contate-nos</h1>
              <p class="max-w-xl text-lg">
                At the same time, the fact that we are wholly owned and totally
                independent from manufacturer and other group control gives you
                confidence that we will only recommend what is right for you.
              </p>

              <div class="mt-8">
                <a href="" class="text-2xl font-bold text-pink-600">
                  {" "}
                  0151 475 4450{" "}
                </a>

                <address class="mt-2 not-italic inline-flex space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>{" "}
                  <span>282 Kevin Brook, Imogeneborough, CA 58517</span>
                </address>
              </div>

              <div class="mt-1">
                <address class="mt-2 not-italic inline-flex space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>{" "}
                  <span>laprasSystem@gmail.com</span>
                </address>
              </div>
            </div>

            <div class="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
              <form action="" class="space-y-4">
                <div>
                  <label class="sr-only" for="name">
                    Name
                  </label>
                  <input
                    class="w-full p-3 text-sm border border-gray-200 rounded-lg"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>

                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label class="sr-only" for="email">
                      Email
                    </label>
                    <input
                      class="w-full p-3 text-sm border border-gray-200 rounded-lg"
                      placeholder="Email address"
                      type="email"
                      id="email"
                    />
                  </div>

                  <div>
                    <label class="sr-only" for="phone">
                      Phone
                    </label>
                    <input
                      class="w-full p-3 text-sm border border-gray-200 rounded-lg"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>

                <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-1">
                  <div>
                    <label class="sr-only" for="assunto">
                      Assunto
                    </label>
                    <input
                      class="w-full p-3 text-sm border border-gray-200 rounded-lg"
                      placeholder="Assunto"
                      type="text"
                      id="assunto"
                    />
                  </div>
                </div>

                <div>
                  <label class="sr-only" for="message">
                    Message
                  </label>
                  <textarea
                    class="w-full p-3 text-sm border border-gray-200 rounded-lg"
                    placeholder="Message"
                    rows="8"
                    id="message"
                  ></textarea>
                </div>

                <div class="mt-4">
                  <button
                    type="submit"
                    class="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto hover:w-[125px]"
                  >
                    <span class="font-medium"> Enviar </span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 ml-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
