import { useRouter } from "next/router";
import { FunctionComponent } from "react";
import Image from "next/image";
import searchIcon from "@/images/search-svgrepo-com.svg"
import qrIcon from "@/images/qr-code-scan-svgrepo-com.svg"

const NavBar: FunctionComponent=()=>{
   const router= useRouter()
    function goHome(){
        router.push("/")
    }

    return(
        <div className="flex">
        <div className="mt-2 max-w-[85%] flex-1 flex h-[125px] item-center font-roboto bg-university-green rounded-r-3xl">
            <div className="ml-10 my-auto max-w-[50%] text-white flex-1 text-5xl font-bold cursor-pointer justify-center"
            onClick={goHome}> BotanicApp Udea</div>
            <div className="mx-4 flex flex-1 my-auto justify-center">
                <input className="mr-2 rounded-full text-base pr-3 py-2  pl-4 w-[65%]"
                placeholder="Buscar Planta"/>
                <Image src={searchIcon} alt={""} className="w-[50px]"/>
            </div>
        </div>

        <div className="ml-20 mt-2 max-w-[7%] flex-1 h-[125px] item-center flex justify-center font-roboto bg-university-green rounded-3xl ">
        <div className="my-auto flex flex-1 justify-center">
        <Image src={qrIcon} alt={""} className="w-[100px]"/>
        </div>
        </div>
        </div>

    )

}

export default NavBar