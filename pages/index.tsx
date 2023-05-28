import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { plant } from "../models/plantModel";
import useAxios from "../hooks/UseAxios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [plantList, setPlantList] = useState<plant[]>([]);
  const [smSize, setSmSize] = useState<boolean>(false);
  const { error, sendRequest } = useAxios();

  const handleResize = () => {
    window.innerWidth < 768 ? setSmSize(true) : setSmSize(false);
  };
  useEffect(() => {
    sendRequest(
      "plants",
      {
        method: "get",
      },
      (response) => {
        if (response.status == 200 && response.data) {
          setPlantList(response.data);
        } else {
          alert("Lo setimos ha ocurrido un error");
          history.go(-1);
        }
        {
        }
      }
    );
    handleResize();
    window.addEventListener("resize", handleResize, false);
  }, []);

  return (
    <div className={`w-full mr-2 mb-3 ${smSize ? "block" : "flex"}`}>
      {smSize &&
        plantList.map((plant, index) => (
          <div className="mx-2 w-full" key={index + "pl"}>
            <Card
              idPlant={plant.id}
              title={plant.common_name}
              subTitle={plant.scientific_name}
              imageSrc={"/PlantsImg/" + plant.id + ".jpg"}
            />
          </div>
        ))}
      {!smSize &&
        plantList.map((plant, index) => (
          <div className="w-[30%] mx-2" key={index + "pl"}>
            <Card
              idPlant={plant.id}
              title={plant.common_name}
              subTitle={plant.scientific_name}
              imageSrc={"/PlantsImg/" + plant.id + ".jpg"}
            />
          </div>
        ))}
    </div>
  );
}
