import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Userbio() {
  return (
    <main
      className={`bg-[url('/bg/jenee-auth-bg.png')] bg-no-repeat bg-cover bg-center flex flex-col gap-6 pb-0`}
    >
      <h1 className="text-2xl font-bold">Fill in your bio</h1> 
      <span className="font-medium text-base text-center w-full">
        The data will be displayed in your account profile for security
      </span> 
      <form action="fill-in" className="w-full h-max rounded-t-[var(--radius-md)] bg-white opacity-95 flex flex-col">
        <label for="username" className="text-2xl font-bold">Full Name:</label> 
        <input
          type="text"
          placeholder="Enter your full name"
          className="bg-slate-300 rounded-[var(--radius-full)] h-14 w-full"
        />
        
        <label for="password" className="text-2xl font-bold">Phone number:</label> 
        <button>
          <input
            type="text"
            placeholder="Enter your phone number"
            className="bg-slate-300 rounded-[var(--radius-full)] h-14 w-full"
          />
        </button>
      
        <label for="password" className="text-2xl font-bold">Gender:</label> 
        <button>
          <input
            type="text"
            placeholder="Enter your gender"
            className="bg-slate-300 rounded-[var(--radius-full)] h-14 w-full"
          />
        </button>
      
        <label for="password"className="text-2xl font-bold">Date of birth:</label>
        <button>
          <input
            type="text"
            placeholder="Enter your date of birth"
            className="bg-slate-300 rounded-[var(--radius-full)] h-14 w-full"
          />
        </button>

        <label for="password" className="text-2xl font-bold">Address:</label> 
        <button>
          <input
            type="text"
            placeholder="Enter your address"
            className="bg-slate-300 rounded-[var(--radius-full)] h-14 w-full"
          /> 
        </button>
      </form> 
      <button type="submit" className="bg-[var(--secondary-red-color)] rounded-[var(--radius-full)] text-white text-2xl font-bold tracking-[0.05rem] flex flex-col items-center justify-center px-4 py-3 w-full">Next</button>
    
    </main>
  );
}
