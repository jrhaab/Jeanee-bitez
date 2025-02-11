import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Addprofilephoto() {
    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`} >
             
             
              <span>Upload your profile photo</span> 
              <small>This data will be displayed in your profile for security

              </small>

              
             
              <div className="flex flex-col justify-start">
                
                <button className="bg-slate-300 rounded-3xl h-20 w-80 ml-7 text-black ">
                    <span>take photo</span></button> <br />
                <button className="bg-slate-300 rounded-3xl h-20 w-80 ml-7 text-black "><span>From gallery</span></button> <br />
               
                </div>
                <button type="button" className="bg-red-800 justify-center mt-12 rounded-3xl text-white flex items-center h-10 w-52 ml-8"> Next</button>
             
        </main>
    )
}