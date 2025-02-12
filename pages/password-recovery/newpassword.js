import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Newpassword() {
    return(
        <main  className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
            <Image src={"https://res.cloudinary.com/dfdy55ndo/image/upload/v1735923906/jeanee-transparent-logo_wz8kzv.png"} alt="" width={100} height={100} /> 
            <h1>Rest Password </h1> 
            <span>Please create a new password for your account</span> 
            <div className="mb-28 flex flex-col gap-9">
            <input type="text" placeholder="New Password" className="bg-slate-300 rounded-2xl h-10 w-52 pl-10"/> 
            <input type="text" placeholder="Confirm Password" className="bg-slate-300 rounded-2xl h-10 w-52 pl-10" />
            <span><b>Remind me</b> </span>
            </div>
           
            
            <button className="bg-red-800 justify-center rounded-3xl text-white flex items-center h-10 w-52">Save</button> <br />
            <span>Cancel</span>

        </main>
    )

}