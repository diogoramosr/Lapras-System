import React, { useState } from "react";
import { useTheme } from "next-themes";
import { BsFillBellFill } from "react-icons/bs";
import Button from "./Button";

export default function NavbarDash(props) {
  const { systemTheme, theme, setTheme } = useTheme();

  const [profile, setProfile] = useState(false);
  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <Button className="bg-gray-200 dark:bg-gray-600"
          onClick={() => setTheme("light")}
          
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
          </svg>
        </Button>
      );
    } else {
      return (
        <Button className="bg-gray-200"
        onClick={() => setTheme("dark")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
              clip-rule="evenodd"
            />
          </svg>
        </Button>
      );
    }
  };
  return (
    <>
      <div class="top-5 h-16 lg:py-2.5">
        <div class="px-6 flex items-center justify-between space-x-4 2xl:container">
          <h5 hidden class="text-2xl font-medium lg:block fadeIn">
            {props.title}
          </h5>
          <div class="sticky top-5 h-16 lg:py-2.5">
            <div class="px-6 flex items-center justify-between space-x-4 2xl:container">
              <h5 hidden class="text-2xl font-medium lg:block">
                Estatísticas Gerais
              </h5>
              <button class="w-12 h-16 -mr-2 border-r lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 my-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              <div class="flex space-x-4">
                <button
                  aria-label="notification"
                  class="w-10 h-10 flex items-center justify-center hover:scale-105 transition duration-200 ease-in-out"
                >
                  <BsFillBellFill class="w-4 h-4" />
                </button>
                {renderThemeChanger()}
                <div
                  className="flex items-center relative cursor-pointer"
                  onClick={() => setProfile(!profile)}
                >
                  {profile && (
                    <ul className="p-2 w-40 border-r bg-white absolute rounded right-1 shadow-md top-0 mt-14 ">
                      <li className="text-sm leading-3 tracking-normal py-2">
                        <div className="flex items-center">
                          <span className="ml-1 mb-3 font-semibold">CEO</span>
                        </div>
                        <span className="ml-1 text-sm text-gray-400">
                          Admin
                        </span>
                      </li>
                      <hr className="mt-2 mb-2"></hr>
                      <li className="cursor-pointer text-black text-sm leading-3 tracking-normal py-1 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-user"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={12} cy={7} r={4} />
                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                          </svg>
                          <span className="ml-2">Perfil</span>
                        </div>
                      </li>

                      <li className="cursor-pointer text-black text-sm leading-3 tracking-normal mt-1 py-2 ml-1 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-help-circle"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                          <line x1="12" y1="17" x2="12.01" y2="17"></line>
                        </svg>
                        <span className="ml-2">Ajuda</span>
                      </li>
                      <hr className="mt-2 mb-2"></hr>
                      <li className="cursor-pointer text-black text-sm leading-3 tracking-normal mt-2 py-2 pl-1 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-box-arrow-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                          />{" "}
                          <path
                            fill-rule="evenodd"
                            d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                          />
                        </svg>
                        <span className="ml-2">Sair</span>
                      </li>
                    </ul>
                  )}

                  <div className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out">
                    <img
                      className="rounded-full h-10 w-10 object-cover hover:scale-105 duration-200"
                      src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_2.png"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
