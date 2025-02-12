import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Signup() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Image
        src={
          "https://res.cloudinary.com/dfdy55ndo/image/upload/v1735923906/jeanee-transparent-logo_wz8kzv.png"
        }
        alt=""
        width={100}
        height={100}
      />
      <span>Sign up for free</span>
      <form action="fill-in">
        <label for="email-address">Email:</label> <br />
        <input
          type="text"
          placeholder="email or phone number"
          className="bg-slate-300 rounded-md h-8 w-52 pl-10"
        />
        <br /> <br />
        <label for="password">Password:</label> <br />
        <button>
          <input
            type="text"
            placeholder="password"
            className="bg-slate-300 rounded-md h-8 w-52 pl-10"
          /> 
        </button>{" "}
        <br /> <br />
        <span> Remind me</span>
        <br /> 
        <button
          type="submit"
          className="bg-red-800 justify-center rounded-3xl text-white flex items-center h-10 w-52  "
        >
          Sign up
        </button>{" "}
        <br />
        <span className="flex justify-center">or continue with</span>
      </form> <br />
      <div className="flex flex-row  justify-center">
        
        <button className=" bg-slate-300 justify-center rounded-md text-black flex items-center h-8 w-36">
          Google
        </button>
      </div> <br />
      <span>Already have an account? <span className="text-red-800">Sign in</span> </span>
    </main>
  );
}
