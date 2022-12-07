import { useRouter } from "next/router";
import Sidebar from "../../../components/Sidebar";
import NavbarDash from "../../../components/NavbarDash";
import BarChart from "../../../components/graficos/BarChart";
import AreaChart from "../../../components/graficos/AreaChart";
import GeoChart from "../../../components/graficos/GeoChart";
import PieChart from "../../../components/graficos/PieChart";
import GaugeChart from "../../../components/graficos/GaugeChart";
import Candlestick from "../../../components/graficos/CandlestickChart";
import ComboChart from "../../../components/graficos/ComboChart";

const Graficos = () => {
  const { asPath } = useRouter();
  return (
    <>
      <div class="m-0 font-sans antialiased font-normal text-base leading-default bg-zinc-50 dark:bg-gray-600 h-screen overflow-x-hidden">
        <Sidebar />
        <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] dark:bg-gray-600">
          <NavbarDash title="Gráficos" />
          <div class="2xl:container h-full bg-zinc-50 dark:bg-gray-600 fadeIn">
            <div class="2xl:container h-full  dark:bg-gray-600">
              <div class="flex justify-center items-center">
                <div class="w-full px-6 py-2 mx-auto">
                  <div class="flex flex-wrap mt-2 items-start -mx-3 justify-between sm:h-full md:h-[30rem] lg:h-[30rem] p-2  ">
                    <div class="w-full h-full md:w-full flex-wrap p-3 mb-6 gap-4 md:mb-0 md:flex-none flex items-center justify-between">
                      <div className="h-full w-full flex flex-wrap gap-4 items-center justify-between">
                       
                        <div class="relative lg:h-3/5 h-full w-full lg:w-2/4 flex flex-col min-w-0 break-words bg-white dark:bg-gray-500 shadow-md rounded-2xl bg-clip-border">
                          <div class="flex flex-wrap h-full w-full">
                            <div class="h-full w-full px-3 lg:w-full lg:flex-none">
                              <div className="w-full h-full p-2 m-auto rounded-lg dark:bg-gray-900 dark:text-gray-100">
                                <div className="flex justify-around items-center h-full w-full">
                                  <div className="flex flex-col items-center p-1 w-full h-full">
                                    <BarChart/>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="relative h-3/5 w-full lg:w-2/5 flex flex-col min-w-0 break-words bg-white dark:bg-gray-500 shadow-md rounded-2xl bg-clip-border">
                          <div class="flex flex-wrap h-full w-full">
                            <div class="h-full w-full px-3 lg:w-full lg:flex-none">
                              <div className="w-full h-full p-2 m-auto rounded-lg dark:bg-gray-900 dark:text-gray-100">
                                <div className="flex justify-around items-center h-full">
                                  <div className="flex flex-col items-center p-1 w-full h-full">
                                    <PieChart />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="relative h-2/4 w-full md:w-1/5 flex flex-col min-w-0 break-words bg-white dark:bg-gray-500 shadow-md rounded-2xl bg-clip-border">
                          <div class="flex flex-wrap h-full w-full">
                            <div class="h-full w-full px-3 lg:w-full lg:flex-none">
                              <div className="w-full h-full p-2 m-auto rounded-lg dark:bg-gray-900 dark:text-gray-100">
                                <div className="flex justify-around items-center h-full">
                                  <div className="flex flex-col justify-center items-center p-1 w-full h-full">
                                    <GaugeChart />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="relative h-2/4 w-full md:w-2/4 flex flex-col min-w-0 break-words bg-white dark:bg-gray-500 shadow-md rounded-2xl bg-clip-border">
                          <div class="flex flex-wrap h-full w-full">
                            <div class="h-full w-full px-3 lg:w-full lg:flex-none">
                              <div className="w-full h-full p-2 m-auto rounded-lg dark:bg-gray-900 dark:text-gray-100">
                                <div className="flex justify-around items-center h-full">
                                  <div className="flex flex-col items-center p-1 w-full h-full">
                                    <AreaChart />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="relative h-2/4 w-full md:w-1/4 flex flex-col min-w-0 break-words bg-white dark:bg-gray-500 shadow-md rounded-2xl bg-clip-border">
                          <div class="flex flex-wrap h-full w-full">
                            <div class="h-full w-full px-3 lg:w-full lg:flex-none">
                              <div className="w-full h-full p-2 m-auto rounded-lg dark:bg-gray-900 dark:text-gray-100">
                                <div className="flex justify-around items-center h-full">
                                  <div className="flex justify-center items-center p-1 w-full h-full">
                                    <ComboChart />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="relative h-2/4 w-full md:w-1/5 flex flex-col min-w-0 break-words bg-white dark:bg-gray-500 shadow-md rounded-2xl bg-clip-border">
                          <div class="flex flex-wrap h-full w-full">
                            <div class="h-full w-full px-3 lg:w-full lg:flex-none">
                              <div className="w-full h-full p-2 m-auto rounded-lg dark:bg-gray-900 dark:text-gray-100">
                                <div className="flex justify-around items-center h-full">
                                  <div className="flex flex-col justify-center items-center p-1 w-full h-full">

                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="relative h-2/4 w-full md:w-2/4 flex flex-col min-w-0 break-words bg-white dark:bg-gray-500 shadow-md rounded-2xl bg-clip-border">
                          <div class="flex flex-wrap h-full w-full">
                            <div class="h-full w-full px-3 lg:w-full lg:flex-none">
                              <div className="w-full h-full p-2 m-auto rounded-lg dark:bg-gray-900 dark:text-gray-100">
                                <div className="flex justify-around items-center h-full">
                                  <div className="flex flex-col items-center p-1 w-full h-full">


                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="relative h-2/4 w-full md:w-1/4 flex flex-col min-w-0 break-words bg-white dark:bg-gray-500 shadow-md rounded-2xl bg-clip-border">
                          <div class="flex flex-wrap h-full w-full">
                            <div class="h-full w-full px-3 lg:w-full lg:flex-none">
                              <div className="w-full h-full p-2 m-auto rounded-lg dark:bg-gray-900 dark:text-gray-100">
                                <div className="flex justify-around items-center h-full">
                                  <div className="flex flex-col items-center p-1 w-full h-full">


                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="relative h-full w-full md:w-full flex flex-col min-w-0 break-words bg-white dark:bg-gray-500 shadow-md rounded-2xl bg-clip-border">
                          <div class="flex flex-wrap h-full w-full">
                            <div class="h-full w-full px-3 lg:w-full lg:flex-none">
                              <div className="w-full h-full p-2 m-auto rounded-lg dark:bg-gray-900 dark:text-gray-100">
                                <div className="flex justify-around items-center h-full">
                                  <div className="flex flex-col items-center p-1 w-full h-full">
                                    <GeoChart />

                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Graficos;
