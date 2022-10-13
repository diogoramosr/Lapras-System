import { useRouter } from "next/router";
import Sidebar from "../../../components/Sidebar";
import NavbarDash from "../../../components/NavbarDash";

const Graficos = () => {
  const { asPath } = useRouter();
  return (
    <>
      <div class="m-0 font-sans antialiased font-normal text-base leading-default bg-zinc-50 dark:bg-gray-600 h-screen">
        <Sidebar />
        <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] bg-red-800 dark:bg-gray-600">
          <NavbarDash title="Gráficos" />
          <div class="2xl:container h-full bg-zinc-50 dark:bg-gray-600 fadeIn">
            <div class="2xl:container h-full  dark:bg-gray-600">
              <div class="flex justify-center items-center">

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Graficos;
