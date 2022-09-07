import { useRouter } from "next/router";
import Sidebar from "../../../components/Sidebar";
import NavbarDash from "../../../components/NavbarDash";

const HistoricPage = () => {
  const { asPath } = useRouter();
  return (
    <>
      <div class="m-0 font-sans antialiased font-normal text-base leading-default bg-zinc-50 h-screen">
        <Sidebar />
        <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] bg-red-800">
          <NavbarDash title="Histórico" />
        </div>
      </div>
    </>
  );
};

export default HistoricPage;
