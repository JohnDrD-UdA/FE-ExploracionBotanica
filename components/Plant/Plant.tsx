import { FunctionComponent, useEffect, useState } from "react";
import plantProps from "./Plant.interface";
import { useRouter } from "next/router";
import {
  FaCircle,
  FaSkullCrossbones,
  FaUtensils,
  FaRegSun,
  FaRegMoon,
  FaLeaf,
  FaAppleAlt,
} from "react-icons/fa";
import Image from "next/image";

interface IconProps {
  icon: any;
  enabled: boolean;
  tooltip: string;
}

const Plant: FunctionComponent<plantProps> = ({ plantInfo }) => {
  const router = useRouter();
  const [smSize, setSmSize] = useState<boolean>(false);

  const handleResize = () => {
    window.innerWidth < 768 ? setSmSize(true) : setSmSize(false);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize, false);
  }, []);

  const icons: IconProps[] = [
    {
      icon: FaSkullCrossbones,
      enabled: plantInfo.isPousonous ? true : false,
      tooltip: plantInfo.isPousonous ? "Es venenoso" : "No es venenoso",
    },
    {
      icon: FaUtensils,
      enabled: plantInfo.isEatable ? true : false,
      tooltip: plantInfo.isEatable ? "Es comestible" : "No es comestible",
    },
    {
      icon: FaLeaf,
      enabled: plantInfo.hasFlowers ? true : false,
      tooltip: plantInfo.hasFlowers ? "Tiene flores" : "No tiene flores",
    },
    {
      icon: FaAppleAlt,
      enabled: plantInfo.produceFruits ? true : false,
      tooltip: plantInfo.produceFruits ? "Produce frutas" : "No produce frutas",
    },
    {
      icon: FaRegMoon,
      enabled: plantInfo.isShadePlant ? true : false,
      tooltip: plantInfo.isShadePlant
        ? "Es planta de sombra"
        : "No es planta de sombra",
    },
    {
      icon: FaRegSun,
      enabled: plantInfo.isSunPlant ? true : false,
      tooltip: plantInfo.isSunPlant
        ? "Es planta de sol"
        : "No es planta de sol",
    },
  ];

  return (
    <div className={`w-full h-full ${smSize ? "block" : "flex"}`}>
      {smSize && (
        <div
          className={`${
            smSize ? "w-full" : "w-[30%]"
          } flex justify-center border-4 border-university-green rounded-lg mr-2 mt-12 mb-4`}
        >
          <Image
            src={"/PlantsImg/" + plantInfo.id + ".jpg"}
            alt={"test"}
            className="max-h-[600px]"
            width={500}
            height={500}
          />
        </div>
      )}
      <div className={`${smSize ? "w-full" : "w-[70%]"} mb-4`}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="mt-12 bg-university-green rounded-r-lg text-white w-[90%] leading-6 py-1 shadow flex items-center space-x-2 h-12">
            <span className="text-lg font-slab font-bold ml-10">
              {plantInfo.common_name}
            </span>
            <span className="text-sm font-mono italic ml-10 items-left">
              -{plantInfo.scientific_name}
            </span>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="mt-5 bg-white rounded-full text-white w-[80%] leading-6 py-1 shadow flex items-center justify-between border border-[#A8A3A3] h-12 ml-4 mr-4">
            {icons.map(({ icon: Icon, enabled, tooltip }, index) => (
              <div
                key={index}
                className={`flex items-center justify-center w-8 h-8 rounded-full ml-5 mr-5 ${
                  enabled ? "bg-[#33691E]" : "bg-[#FF5757]"
                }`}
                title={tooltip}
              >
                <Icon size={20} />
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="mt-5 bg-white rounded-md text w-[90%] leading-6 py-1 shadow flex-col items-center space-x-2 border border-[#D8D3D3] ml-4 mr-4">
            <div
              style={{
                marginTop: "10px",
                fontFamily: "Roboto Mono",
                marginLeft: "10px",
              }}
            >
              <span style={{ fontWeight: "bold" }}>Nombre comun: </span>
              {plantInfo.common_name}
            </div>
            <div style={{ marginTop: "10px", fontFamily: "Roboto Mono" }}>
              <span style={{ fontWeight: "bold" }}>Nombre cientifico: </span>
              {plantInfo.scientific_name}
            </div>
            <div style={{ marginTop: "10px", fontFamily: "Roboto Mono" }}>
              <span style={{ fontWeight: "bold" }}>Altura: </span>
              {plantInfo.height}
            </div>
            <br />
            <div style={{ marginTop: "10px", fontFamily: "Roboto Mono" }}>
              <span style={{ fontWeight: "bold" }}>Descripción: </span>
              {plantInfo.description}
            </div>
          </div>
        </div>
      </div>
      {!smSize && (
        <div
          className={`${
            smSize ? "w-full" : "w-[30%]"
          } flex justify-center border-4 border-university-green rounded-lg mr-2 mt-12 mb-4`}
        >
          <Image
            src={"/PlantsImg/" + plantInfo.id + ".jpg"}
            alt={"test"}
            className="max-h-[600px]"
            width={500}
            height={500}
          />
        </div>
      )}
    </div>
  );
};

export default Plant;
