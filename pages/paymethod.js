import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Paymentmethod() {
    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`} >
             <Image src={"https://res.cloudinary.com/dfdy55ndo/image/upload/v1735923906/jeanee-transparent-logo_wz8kzv.png"} alt="" width={100} height={100} />
             
              <span>Payment Method </span> 
              
              <small className="place-items-center ">* This data will be displayed in your profile for security</small>

              
             
              <div className="flex flex-col justify-start">
                
                <button className="bg-slate-300 rounded-2xl h-12 w-80  text-black ">Telecel</button> <br />
                <button className="bg-slate-300 rounded-2xl h-12 w-80  text-black ">AirtelTigo</button> <br />
                <button className="bg-slate-300 rounded-2xl h-12 w-80  text-black ">MTN</button> <br />
                </div>
                <button type="button" className="bg-red-800 justify-center rounded-3xl mt-12 text-white flex items-center h-10 w-80 "> Next</button>
             
        </main>
    )
}