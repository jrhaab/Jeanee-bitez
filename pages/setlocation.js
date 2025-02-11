import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export default function Setlocation() {
    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`} >
             
             
              <span>Set location</span> 
              <small className="">This data will be displayed in your profile for <br />security

              </small>
              <div className="flex flex-col justify-start">
                <button className="bg-slate-300 rounded-2xl h-20 w-52 ml-7 mb-12">
                <span>set location </span></button> <br />
                </div>
               
                
                <button type="button" className="bg-red-800 justify-center mt-28 rounded-3xl text-white flex items-center h-10 w-52 ml-8"> Next</button>
             
        </main>
    )
}