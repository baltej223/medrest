// import Image from "next/image";
// import styles from "./page.module.css";

import {Navbar} from "@/comps/Navbar"
import Content from "./content";

export default function Home() {
  return (
  <>
    <div className="content w-full h-screen">
      <Navbar/>
      <div className="mainContent">
        <span className="font-bold text-xl">Inventory:</span>
        <Content/>
      </div>
    </div>
  </>  
  );
}
