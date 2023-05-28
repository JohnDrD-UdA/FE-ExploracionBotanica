import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/UseAxios";
import Plant from "../../components/Plant/Plant";
import { plant } from "../../models/plantModel";

export default function PlantShow() {
  const router = useRouter();
  const { error, sendRequest } = useAxios();
  const [plantInfo, setPlantInfo] = useState<plant>({
    common_name: "",
    scientific_name: "",
    description: "",
  });

  useEffect(() => {
    const query = router.query;
    if (query.id) {
      sendRequest(
        "plants/" + query.id,
        {
          method: "get",
        },
        (response) => {
          if (response.status == 200 && response.data) {
            setPlantInfo(response.data);
          } else {
            alert("Lo sentimos la planta que busca no esta disponible");
            router.push("/");
          }
          {
          }
        }
      );
    }
  }, []);
  return (
    <div className="w-full h-full min-h-[600px]">
      {plantInfo.common_name != "" && <Plant plantInfo={plantInfo} />}
      {plantInfo.common_name == "" && (
        <div>Lo sentimos esta Planta no esta disponible</div>
      )}
    </div>
  );
}
