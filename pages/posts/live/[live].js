import { useRouter } from "next/router";
import Sidebar from "../../../components/Sidebar";
import NavbarDash from "../../../components/NavbarDash";

// PAGINA DINÂMICA -------
// ADICIONAR [] EM VOLTA DO NOME DA PAGINA

const SlugPage = () => {
  const { asPath } = useRouter();
  return (
    <>
      <div class="m-0 font-sans antialiased font-normal text-base leading-default bg-zinc-50 dark:bg-[#121212] h-screen">
        <Sidebar />
        <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] bg-red-800 dark:bg-[#121212]">
          <NavbarDash title="Ao Vivo" />
        </div>
      </div>
    </>
  );
};

export default SlugPage;
