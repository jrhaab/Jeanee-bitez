import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Userbio() {
  return (
    <main
      className={`bg-[url('/bg/jenee-auth-bg.png')] bg-no-repeat bg-cover shadow-lg bg-center flex flex-col gap-6 px-3 pb-0`}
    >
      <h1 className="text-2xl font-bold">Fill in your bio</h1> 
      <span className="font-medium text-base text-center w-full">
        The data will be displayed in your account profile for security
      </span> 
      <section className="w-full h-max rounded-t-[var(--radius-md)] bg-white flex flex-col opacity-95 py-8">
      <form action="fill-in" className="w-full h-max  flex flex-col px-3 ">
        <label for="username" className="text-1xl font-semibold">Full Name:</label> 
        <input
          type="text"
          placeholder="Enter your full name"
          className="bg-slate-300 rounded-[var(--radius-full)] h-14 w-full opacity-35"
        />
        
        <label for="password" className="text-1xl font-semibold">Phone number:</label> 
        <button>
          <input
            type="text"
            placeholder="Enter your phone number"
            className="bg-slate-300 rounded-[var(--radius-full)] h-14 w-full opacity-35"
          />
        </button>
      
        <label for="password" className="text-1xl font-semibold">Gender:</label> 
        <button>
          <input
            type="text"
            placeholder="Enter your gender"
            className="bg-slate-300 rounded-[var(--radius-full)] h-14 w-full opacity-35"
          />
        </button>
      
        <label for="password"className="text-1xl font-semibold">Date of birth:</label>
        <button>
          <input
            type="text"
            placeholder="Enter your date of birth"
            className="bg-slate-300 rounded-[var(--radius-full)] h-14 w-full opacity-35"
          />
        </button>

        <label for="password" className="text-1xl font-semibold">Address:</label> 
        <button>
          <input
            type="text"
            placeholder="Enter your address"
            className="bg-slate-300 rounded-[var(--radius-full)] h-14 w-full opacity-35"
          /> 
        </button>
      </form> 
      </section>
      
     <div className="bg-[var(--secondary-red-color)] rounded-[var(--radius-full)] text-white text-2xl font-bold tracking-[0.05rem] flex flex-col items-center justify-center w-full px-3 py-3">
     <button type="submit" >Next</button>
     </div>    
    </main>
  );
}
9