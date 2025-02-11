import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Landingpage() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
   
     <Image src={"https://res.cloudinary.com/dfdy55ndo/image/upload/v1735923906/jeanee-transparent-logo_wz8kzv.png"} alt="" width={90} height={90} />
     <span className="mb-40">The best diary ordering and delivery app of <br /> the century </span> <br />
     <button className=" bg-red-800 justify-center ml-1 rounded-2xl h-10 text-white flex items-center w-80">Next</button>

    </main>
  );
}