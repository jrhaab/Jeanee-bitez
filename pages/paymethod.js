import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Paymentmethod() {
    return (
        <main className={`bg-[url('/bg/jenee-auth-bg.png')] bg-no-repeat bg-cover bg-center flex flex-col  w-full gap-6 px-3 pb-0`} >
             <Image src={"https://res.cloudinary.com/dfdy55ndo/image/upload/v1735923906/jeanee-transparent-logo_wz8kzv.png"} alt="" width={100} height={100} />
             
              <span>Payment Method </span> 
              
              <span className="font-medium text-base text-center w-full">* This data will be displayed in your profile for security</span>

              <section className="w-full h-max rounded-t-[var(--radius-md)] bg-white flex flex-col opacity-95 shadow-lg py-8"> 
              <div className="flex flex-col items-center justify-center w-full py-10 ">
                
                <button className="bg-slate-50  rounded-2xl h-12   text-[var(--secondary-red-color)] w-full ">Telecel</button> <br />
                <button className="bg-slate-50  rounded-2xl h-12 w-full text-[var(--secondary-red-color)]  ">AirtelTigo</button> <br />
                <button className="bg-slate-50  rounded-2xl h-12 w-full  text-[var(--secondary-red-color)] "> MTN</button> <br />
                </div>

              </section>
             
            
                <button type="button" className="bg-[var(--secondary-red-color)] rounded-[var(--radius-full)] text-white text-2xl font-bold tracking-[0.05rem] flex flex-col items-center justify-center w-full px-3 py-3 "> Next</button>
             
        </main>
    )
}