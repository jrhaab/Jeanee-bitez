import { Inter } from "next/font/google";
import { FaHamburger } from "react-icons/fa"; // FontAwesome icons

const inter = Inter({ subsets: ["latin"] });

export default function Maplocation() {
  return (
    <main
      className={`flex min-h-screen flex-col  items-center justify-between p-24 ${inter.className}`}
    >
        <div className="items-center justify-center mt-36"> 
        <FaHamburger className="text-red-500 animate-bounce ml-20" />
      <h1 className="ml-6">Congrats!</h1>
      <small>Your profile is ready for use</small></div>
     

      <button
        type="button"
        className="bg-red-800 justify-center mt-10 rounded-3xl text-white flex items-center h-10 w-52 "
      >
        Go homepage
      </button>
    </main>
  );
}
