import { MdLocalCafe } from "react-icons/md"; // Material Design icons
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Passwordrest() {
    return(
        <main  className={`flex min-h-screen flex-col  items-center justify-between p-24 ${inter.className}`} >
       
            <h1>Forgot password</h1> 
            <span>Select which contact details should we use to  reset the password</span>
           
            <div className="flex flex-col gap-5 mb-28">
            <button className=" bg-slate-300  rounded-2xl h-14 text-black flex-row flex items-center w-52 justify-start ml-7  "> 
                <MdLocalCafe className="text-brown-600 animate-bounce" />
                <div className="flex flex-col"><small className="flex items-start justify-items-start  ml-8">Via SMS:</small> 
                <small className="flex items-start justify-items-start  ml-8">+233*****37</small></div></button>

            <button className=" bg-slate-300  rounded-2xl h-14 text-black flex-row flex items-center w-52 justify-start ml-7 ">
                <MdLocalCafe className="text-brown-600 animate-bounce" />
                <div className="flex flex-col"> <small className="flex items-start justify-items-start  ml-8"> Via email:</small> 
                <small className="flex items-start justify-items-start  ml-8">em******@gmail.com</small></div></button>
           
           

       
            </div>
            <button className=" bg-red-800 justify-center rounded-2xl h-10 text-white flex items-center w-52 ml-7 ">Next</button> 
        </main>
    )

}