import { useRouter } from "next/router";
import { FunctionComponent, useEffect, useState } from "react";
import Image from "next/image";
import searchIcon from "@/images/search-svgrepo-com.svg";
import qrIcon from "@/images/qr-code-scan-svgrepo-com.svg";
import downIcon from "@/images/chevron-down-svgrepo-com.svg";
import upIcon from "@/images/chevron-up-svgrepo-com.svg";
import Lecter from "../Lecter";

const NavBar: FunctionComponent = () => {
  const router = useRouter();
  const [smSize, setSmSize] = useState<boolean>(false);
  const [arrowChange, setArrowChange] = useState<boolean>(false);
  const [openLecter, setOpenLecter] = useState<boolean>(false);
  const handleResize = () => {
    window.innerWidth < 768 ? setSmSize(true) : setSmSize(false);
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize, false);
  }, []);
  function goHome() {
    router.push("/");
  }

  function changeArrow() {
    setArrowChange(!arrowChange);
  }

  function success(id: any) {
    const objGiven = id;
    setOpenLecter(false);
    router.push("/Plant/" + id.text, undefined);
  }

  function error(e: string) {
    setOpenLecter(false);
  }

  return (
    <div className={`${smSize ? "block" : "flex"}`}>
      <div
        className={`mt-2  flex-1 flex h-[125px] item-center font-roboto bg-university-green  ${
          smSize ? "w-full" : "rounded-r-3xl max-w-[85%]"
        }`}
      >
        <div
          className={`ml-10 my-auto max-w-[50%] text-white flex-1 ${
            smSize ? "text-4xl" : "text-5xl"
          } font-bold cursor-pointer justify-center`}
          onClick={goHome}
        >
          {" "}
          BotanicApp Udea
        </div>

        {smSize && (
          <div
            className="mx-4 flex flex-1 my-auto justify-center"
            onClick={changeArrow}
          >
            <Image
              src={!arrowChange ? downIcon : upIcon}
              alt={""}
              className="w-[40px]"
            />
          </div>
        )}
        {!smSize && (
          <div className="mx-4 flex flex-1 my-auto justify-center">
            <input
              className="mr-2 rounded-full text-base pr-3 py-2  pl-4 w-[65%]"
              placeholder="Buscar Planta"
            />
            <Image src={searchIcon} alt={""} className="w-[50px]" />
          </div>
        )}
      </div>
      {arrowChange && (
        <div
          className="mt-2 flex h-[70px] item-center font-roboto bg-university-green rounded-3xl max-w-[90%] mx-auto
          "
        >
          <div className="mx-2 flex  my-auto justify-start w-[80%]">
            <input
              className="mr-2 rounded-full text-base pr-3 py-2  w-[60%]"
              placeholder="Buscar Planta"
            />
            <Image src={searchIcon} alt={""} className="w-[50px]" />
          </div>
          <div
            className="my-auto flex  justify-center w-[20%] mr-2"
            onClick={() => {
              setOpenLecter(true);
            }}
          >
            <Image src={qrIcon} alt={""} className="w-[50px]" />
          </div>
        </div>
      )}

      {!smSize && (
        <div className="ml-20 mt-2 max-w-[7%] flex-1 h-[125px] item-center flex justify-center font-roboto bg-university-green rounded-3xl ">
          <div
            className="my-auto flex flex-1 justify-center"
            onClick={() => {
              setOpenLecter(true);
            }}
          >
            <Image src={qrIcon} alt={""} className="w-[100px]" />
          </div>
        </div>
      )}

      {openLecter && (
        <>
          <Lecter
            onSubmit={(id: any) => {
              success(id);
            }}
            show={openLecter}
            close={() => {
              setOpenLecter(false);
            }}
          ></Lecter>
        </>
      )}
    </div>
  );
};

export default NavBar;
