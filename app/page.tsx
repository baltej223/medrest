// "use server";
import {Navbar} from "../comps/Navbar"
import "./globals.css"


export default function Home() {
  return (
    <>
    <div className="w-full h-screen content">
      <Navbar/>
    </div>
    </>
  );
}
