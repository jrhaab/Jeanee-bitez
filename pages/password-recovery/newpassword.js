import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Newpassword() {
    return(
        <main  className={`bg-[url('/bg/jenee-auth-bg.png')] bg-no-repeat bg-cover bg-center  flex flex-col  pb-0  px-3  h-max gap-6`}>
            <Image src={"https://res.cloudinary.com/dfdy55ndo/image/upload/v1735923906/jeanee-transparent-logo_wz8kzv.png"} alt="" width={100} height={100} /> 
            <h1>Rest Password </h1>
            <span className="font-medium text-base text-center w-full"> create a new password</span> 
            <section className=" w-full h-max rounded-[var(--radius-md)] bg-white opacity-95 flex flex-col items-start shadow-lg justify-center px-3 gap-10 py-3">
            <input type="text" placeholder="New Password" className="bg-slate-300 rounded-2xl h-10 w-full "/> 
            <input type="text" placeholder="Confirm Password" className="bg-slate-300 rounded-2xl h-10 w-full " />
            <span className="font-bold justify-start items-start">Remind me </span>
            </section>
           
            
            <button className="bg-red-800 justify-center rounded-3xl text-white flex items-center h-10 w-full">Save</button> <br />
            <span>Cancel</span>

        </main>
    )

}