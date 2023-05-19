import { useRouter } from "next/router";
import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  const router = useRouter();
  function goTo(route: string) {
    router.push(route);
  }
  return (
    <div
      id="FooterContainer"
      className="flex w-full font-roboto bg-university-green h-[110px] text-white"
    >
      <div id="FooterInfo" className="flex flex-col w-[80%]">
        <span className="text-bold ml-5 mt-5 text-lg"> GitHub</span>
        <ul>
          <li
            className="text-semibold ml-5 mt-3 text-sm cursor-pointer"
            onClick={() => {
              goTo("https://github.com/uruenariobo");
            }}
          >
            Miguel Angel Urueña Riobo
          </li>
          <li
            className="text-semibold ml-5 mt-2 text-sm cursor-pointer"
            onClick={() => {
              goTo("https://github.com/JohnDrD-UdA");
            }}
          >
            John D Rodriguez David
          </li>
        </ul>
      </div>
      <div id="FooterAdv" className="flex flex-col w-[20%] my-auto">
        <span className="text-semibold mr-5 mt-5 text-sm justify-end my-auto">
          {" "}
          Universidad de Antoquia - Estilos No oficiales, Proyecto Integrador
          2023-1
        </span>
      </div>
    </div>
  );
};

export default Footer;
