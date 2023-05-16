import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { plant } from "../models/plantModel";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [plantList, setPlantList] = useState<plant[]>([]);
  const [smSize, setSmSize] = useState<boolean>(false);

  const handleResize = () => {
    window.innerWidth < 768 ? setSmSize(true) : setSmSize(false);
  };
  useEffect(() => {
    setPlantList([
      {
        name: "string",
        sciName: "string",
        description: "string",
      },
      {
        name: "string2",
        sciName: "string2",
        description: "string2",
      },
      {
        name: "string3",
        sciName: "string3",
        description: "string3",
      },
    ]);
    handleResize();
    window.addEventListener("resize", handleResize, false);
  }, []);

  return (
    <div className={`w-full mr-2 mb-3 ${smSize ? "block" : "flex"}`}>
      {smSize &&
        plantList.map((plant, index) => (
          <div className="mx-2 w-full" key={index + "pl"}>
            <Card
              title={plant.name}
              subTitle={plant.sciName}
              imageSrc={plant.imgSrc ?? ""}
            />
          </div>
        ))}
      {!smSize &&
        plantList.map((plant, index) => (
          <div className="w-[30%] mx-2" key={index + "pl"}>
            <Card
              title={plant.name}
              subTitle={plant.sciName}
              imageSrc={plant.imgSrc ?? ""}
            />
          </div>
        ))}
    </div>
  );
}
