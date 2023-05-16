import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "../components/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full flex">
      <div className="w-[30%] mx-2">
        <Card title={"testing"} subTitle={"testing2"} imageSrc={""} />
      </div>
      <div className="w-[30%] mx-2">
        <Card title={"testing"} subTitle={"testing2"} imageSrc={""} />
      </div>
      <div className="w-[30%] mx-2">
        <Card title={"testing"} subTitle={"testing2"} imageSrc={""} />
      </div>
    </div>
  );
}
