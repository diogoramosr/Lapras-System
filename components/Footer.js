import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="w-full h-[300px] z-10 bg-black  drop-shadow-xl pt-3">
      <div className="px-2 flex justify-between m-auto max-w-6xl items-center text-white h-full">
        <div className="flex items-center w-full justify-between">
          <div className="">
            <p>
              <a href="/">
                <img src="images/logo.png" width={200} height={200} />
              </a>
            </p>
          </div>
          <div className="flex items-center justify-evenly m-auto w-[80%]">
            <div className="text-left">
              <h4 className="ml-4 mb-4">COMPANY </h4>
              <ul>
                <li><a href="">Lapras System</a></li>
                <li><a href="">Desenvolvedores</a></li>
                <li><a href="">Investidores</a></li>
                <li><a href="">Fornecedores</a></li>
              </ul>
            </div>
            <div className="text-left h-58 pb-6">
              <h4 className="ml-4 mb-4">LINKS</h4>
              <ul>
                <li><a href="">Suporte</a></li>
                <li><a href="">Sobre anúncios</a></li>
                <li><a href="">Brasil</a></li>
                <li></li>
              </ul>
            </div>
            <div className="text-left">
              <h4 className="ml-4 mb-4">COPYRIGHT </h4>
              <ul>
                <li><a href="">Legal</a></li>
                <li><a href="">Centro de Privacidade</a></li>
                <li><a href="">Política de privacidade</a></li>
                <li><a href="">Cookies</a></li>
              </ul>
            </div>
            <div className="text-center w-10">
              <a href="">
                <FontAwesomeIcon icon={faLinkedin} size="2x" className="hover:text-sky-700 transition-all 400ms"/>
              </a>
              <a href="">
                <FontAwesomeIcon
                  icon={faInstagram}
                  size="2x"
                  className="mt-4 hover:text-sky-700 transition-all 400ms"
                />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faGithub} size="2x" className="mt-4 hover:text-sky-700 transition-all 400ms" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
