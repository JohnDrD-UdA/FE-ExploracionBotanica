import { FunctionComponent } from "react";
import cardProps from "./Card.interface";
import { useRouter } from "next/router";
import Image from "next/image";

const Card: FunctionComponent<cardProps> = ({
  title,
  subTitle,
  imageSrc,
  idPlant,
}) => {
  const router = useRouter();
  console.log("imageSrc: ", imageSrc);
  return (
    <div className="flex min-h-[200px] max-h-[250px] md:max-w-[450px] sm:w-full border-2 border-soft-gray rounded-lg mt-5 font-roboto shadow">
      <div className="flex flex-col mx-1 h-full w-1/2 mt-3 ml-5 ">
        <div className="text-university-green text-3xl font-medium mb-5">
          {title}
        </div>
        <div className="text-soft-gray text-lg text-gray italic">
          {subTitle}
        </div>
        <div className="mt-12">
          <button
            className="bg-university-green rounded-full text-white w-[90%] leading-6 py-1 shadow"
            onClick={() => {
              router.push("/Plant/" + idPlant, undefined);
            }}
          >
            Ver mas
          </button>
        </div>
      </div>
      <div
        className="flex flex-col mx-1 h-full border-2 border-university-green rounded-lg mr-2 min-h[150px] max-h-[175px] w-[150px]
        mt-3"
      >
        {imageSrc != "" && (
          <Image
            src={imageSrc}
            alt={"test"}
            className="h-[150px] w-[150px]"
            width={150}
            height={150}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
