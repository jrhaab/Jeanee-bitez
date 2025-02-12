import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Userbio() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>Fill in your bio</h1> <br />
      <span>
        The data will be displayed in your account profile for security
      </span> 
      <form action="fill-in">
        <label for="username">Full Name:</label> <br />
        <input
          type="text"
          placeholder="Enter your full name"
          className="bg-slate-300 rounded-md h-8 w-52 pl-10"
        />
        <br /> 
        <label for="password">Phone number:</label> <br />
        <button>
          <input
            type="text"
            placeholder="Enter your phone number"
            className="bg-slate-300 rounded-md h-8 w-52 pl-10"
          />
        </button>
        <br /> 
        <label for="password">Gender:</label> <br />
        <button>
          <input
            type="text"
            placeholder="Enter your gender"
            className="bg-slate-300 rounded-md h-8 w-52 pl-10"
          />
        </button>
        <br /> 
        <label for="password">Date of birth:</label> <br />
        <button>
          <input
            type="text"
            placeholder="Enter your date of birth"
            className="bg-slate-300 rounded-md h-8 w-52 pl-10"
          />
        </button>
        <br /> 
        <label for="password">Address:</label> <br />
        <button>
          <input
            type="text"
            placeholder="Enter your address"
            className="bg-slate-300 rounded-md h-8 w-52 pl-10"
          /> 
        </button>
      </form> 
      <button type="submit" className="bg-red-800 justify-center rounded-3xl text-white flex items-center h-10 w-52 ">Next</button>
    
    </main>
  );
}
