import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
    return (
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`} >
             <Image src={"https://res.cloudinary.com/dfdy55ndo/image/upload/v1735923906/jeanee-transparent-logo_wz8kzv.png"} alt="" width={100} height={100} />
              <span>Login to your account</span> <br />
              <form className="">

                <label for ="email-address" >Email:</label> <br />
                
                
                <input type="text" placeholder="email or phone number" className="bg-slate-300 rounded-md h-8 w-52 pl-10" /> 

                <br />
                <label for="password">Password:</label> <br />
                <button>
                <input type="text" placeholder="password" className="bg-slate-300 rounded-md h-8 w-52 pl-10"/>
                </button> <br /> <br /><span> Remind me</span>
                 <br />
                <button type="submit" className="bg-red-800 justify-center rounded-3xl text-white flex items-center h-10 w-52  " >Login</button> <br />
                <div>
                <div className="flex justify-center items-center">
              <span >Forgot the password?</span> 
              </div>

                </div> 
              </form>
              <div className="">
                <span>Don't have an account? </span>
                <span className=" text-red-800">Sign up</span>
                </div>
                
             
        </main>
    )
}