import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Projeto() {
  return (
    <>
      <Head></Head>
      <Navbar />
      <div className="h-full drop-shadow-xl">
        <div className="bg-sky-700">
          <div className="flex h-[400px] justify-between items-center max-w-[1240px] m-auto text-white">
            <div className=" mt-20">
              <h1 className="text-4xl font-bold mb-9">
                Curta o Premium grátis por 2 meses
              </h1>
              <p className="text-2xl">
                Depois, pague somente R$ 19,90/mês. Cancele quando quiser.
              </p>
              <div className="flex items-center gap-6">
                <a href="/projeto">
                  <button className="py-3 px-6 sm-w-[40%] my-4 rounded-md hover:scale-105 transition-all 500ms bg-black">
                    Saiba mais
                  </button>
                </a>
                <a href="/contato">
                  <button className="py-3 px-6 sm-w-[40%] my-4 rounded-md hover:scale-105 transition-all 500ms bg-transparent border border-black">
                    Compre agora !
                  </button>
                </a>
              </div>
              <p className="">
                Sujeito a Termos e Condições. Os 2 meses grátis não estão
                disponíveis para usuários que já experimentaram o Premium.
              </p>
            </div>
          </div>
        </div>

        <div class="py-12 mt-10 bg-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="lg:text-center">
              <h2 class="text-base text-black font-semibold tracking-wide uppercase">
                Especificações
              </h2>
              <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
                Por que o System Lapras?
              </p>
              <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                magnam voluptatum cupiditate veritatis in accusamus quisquam.
              </p>
            </div>

            <div class="mt-10">
              <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div class="relative">
                  <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </div>
                    <p class="ml-16 text-lg leading-6 font-medium text-zinc-900">
                      Competitive exchange rates
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </dd>
                </div>

                <div class="relative">
                  <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                        />
                      </svg>
                    </div>
                    <p class="ml-16 text-lg leading-6 font-medium text-zinc-900">
                      No hidden fees
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </dd>
                </div>

                <div class="relative">
                  <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <p class="ml-16 text-lg leading-6 font-medium text-zinc-900">
                      Transfers are instant
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </dd>
                </div>

                <div class="relative">
                  <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                      </svg>
                    </div>
                    <p class="ml-16 text-lg leading-6 font-medium text-zinc-900">
                      Mobile notifications
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div class="bg-zinc-100">
          <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 class="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl">
              <span class="block">Pronto para adquirir?</span>
              <span class="block text-sky-700">
                Obtenha o System Lapras hoje.
              </span>
            </h2>
            <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div class="inline-flex rounded-md shadow">
                <a
                  href="#"
                  class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-700 hover:bg-sky-800"
                >
                  {" "}
                  Iniciar{" "}
                </a>
              </div>
              <div class="ml-3 inline-flex rounded-md shadow">
                <a
                  href="#"
                  class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-sky-700 bg-white hover:bg-gray-100"
                >
                  {" "}
                  Saber mais{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
