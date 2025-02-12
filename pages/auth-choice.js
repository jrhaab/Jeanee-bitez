import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Authchoice() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
   
     <Image src={"https://res.cloudinary.com/dfdy55ndo/image/upload/v1735923906/jeanee-transparent-logo_wz8kzv.png"} alt="" width={100} height={100} />
     <span className="mb-40">Do you want to sign up or login?</span> <br />
     <div className="flex flex-col gap-10">
     <button className=" bg-red-800 justify-center rounded-2xl text-white h-10 flex items-center w-52">Sign up </button>
     <button className=" bg-red-800 justify-center rounded-2xl  text-white h-10 flex items-center w-52">Login </button>
     </div>
     

    </main>
  );
}