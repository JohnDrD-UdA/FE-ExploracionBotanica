import { FunctionComponent } from "react";
import layoutProps from "./layout.interface";
import NavBar from "../Navbar";
import Footer from "../Footer";

const Layout: FunctionComponent<layoutProps> = ({ children }) => {
  return (
    <main className="w-full flex flex-col ">
      <header>
        <NavBar></NavBar>
      </header>
      <div className="flex flex-1 justify-center min-h-[414px]">{children}</div>

      <footer>
        <Footer />
      </footer>
    </main>
  );
};

export default Layout;
