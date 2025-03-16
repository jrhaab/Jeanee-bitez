import { FaPizzaSlice, FaHamburger } from "react-icons/fa"; // FontAwesome icons
import { MdLocalCafe } from "react-icons/md"; // Material Design icons

const SnackIcons = () => {
  return (
    
 <main className="bg-[url('/bg/jenee-auth-bg.png')] bg-no-repeat bg-cover bg-center  flex flex-col  pb-0  px-3  h-max gap-6
    ">
       
       <h1 className="font-bold" >Welcome to Jeanee! </h1>
       <button className="flex flex-row w-full gap-15"><input placeholder="search" className="flex flex-row items center justify-center bg-slate-20 rounded-2xl  text-black w-full h-10"></input>
       <MdLocalCafe className="text-brown-600 animate-bounce items-center justify-center" /></button>
       
       <span className="font-extrabold text-base item-start w-full"> Popular yoghurt flavors </span>
      <section className="w-full h-max rounded-[var(--radius-md)] bg-white opacity-95 flex flex-col items-center justify-center shadow-lg px-3 py-6 gap-4">
     

      <div className="flex w-full text-1xl h-max flex-col items-center justify-center gap-6  ">

      <button className="bg-slate-100  rounded-2xl  text-black flex-row flex items-center justify-start gap-8  w-full h-20"><FaPizzaSlice className="text-yellow-500 animate-bounce" />
      <div className="flex flex-col"> <small className="flex items-start justify-items-start  "> Strawberry
        </small>
        <small className="flex items-start justify-items-start  ">10 cedis
        </small>
        </div></button>

        <button className="bg-slate-100  rounded-2xl  text-black flex-row flex items-center justify-start gap-8  w-full h-20"><FaPizzaSlice className="text-yellow-500 animate-bounce" />
      <div className="flex flex-col"> <small className="flex items-start justify-items-start  "> Vanilla
        </small>
        <small className="flex items-start justify-items-start  ">10 cedis
        </small>
        </div></button>

        <button className="bg-slate-100  rounded-2xl  text-black flex-row flex items-center justify-start gap-8  w-full h-20"><FaPizzaSlice className="text-yellow-500 animate-bounce" />
      <div className="flex flex-col"> <small className="flex items-start justify-items-start  "> chocolate
        </small>
        <small className="flex items-start justify-items-start  ">10 cedis
        </small>
        </div></button>
      </div> 


      </section>
      <span className="font-extrabold text-base item-start w-full">Popular Pastries</span>
      <section className="w-full h-max rounded-[var(--radius-md)] bg-white opacity-95 flex flex-col items-center justify-center shadow-lg px-3 py-6 gap-4">
     
      
    <div className="flex w-full text-2xl flex-col items-center justify-center gap-5 h-15 ">
     
   <button className="bg-slate-100  rounded-2xl  text-black flex-row flex items-center justify-start gap-8 w-full h-20"><FaPizzaSlice className="text-yellow-500 animate-bounce" /></button> 
   <button className="bg-slate-100  rounded-2xl  text-black flex-row flex items-center justify-start gap-8 w-full h-20"><FaPizzaSlice className="text-yellow-500 animate-bounce" /></button>
   <button className="bg-slate-100  rounded-2xl  text-black flex-row flex items-center justify-start gap-8 w-full h-20"><FaPizzaSlice className="text-yellow-500 animate-bounce" /></button>
   
    </div>
      </section>
     
 </main>

  );
};

export default SnackIcons;
