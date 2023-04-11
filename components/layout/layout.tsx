import { FunctionComponent } from "react";
import layoutProps from "./layout.interface";
import NavBar from "../Navbar";

const Layout: FunctionComponent<layoutProps>=({children})=>{

    return(
        <main className="w-full flex flex-col ">
            <header>
                <NavBar></NavBar>
            </header>
            <div className="flex flex-1 justify-center">
                {children}
            </div>

        </main>
    )
}

export default Layout