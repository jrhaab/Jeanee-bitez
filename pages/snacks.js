import { FaPizzaSlice, FaHamburger } from "react-icons/fa"; // FontAwesome icons
import { MdLocalCafe } from "react-icons/md"; // Material Design icons

const SnackIcons = () => {
  return (
    
 <div className="flex  w-screen text-3xl h-screen  flex-col items-center justify-between p-24 
    ">
      <section className="flex w-full text-3xl min-h-screen bg-slate-300 flex-col items-center justify-between p-24">
      <button className="bg-slate-200 text-white w-52 h-20"><FaPizzaSlice className="text-yellow-500 animate-bounce" />
      <span>Strawberry</span></button>
      <button className="bg-slate-200 text-white w-52 h-20"><FaHamburger className="text-red-500 animate-bounce" /> 
      <span>Vanilla</span></button>
      <button className="bg-slate-200 text-white w-52 h-20"><MdLocalCafe className="text-brown-600 animate-bounce" />
      <span>Chocolate</span></button>
      </section>
    <section className="flex  w-full text-3xl min-h-screen  flex-row items-center justify-between p-24">
    <FaPizzaSlice className="text-yellow-500 animate-bounce" />
   <FaHamburger className="text-red-500 animate-bounce" />
   <MdLocalCafe className="text-brown-600 animate-bounce" />
    </section>
 </div>

  );
};

export default SnackIcons;
