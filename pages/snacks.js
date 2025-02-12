import { FaPizzaSlice, FaHamburger } from "react-icons/fa"; // FontAwesome icons
import { MdLocalCafe } from "react-icons/md"; // Material Design icons

const SnackIcons = () => {
  return (
    
 <div className="flex  w-52 text-3xl h-80  flex-col items-center justify-between p-24 
    ">
      <div className="flex w-52 text-3xl min-h-52 bg-slate-300 flex-col items-center justify-center gap-5 ">
      <button className="bg-slate-200 text-white w-52 h-15"><FaPizzaSlice className="text-yellow-500 animate-bounce" />
      <span>Strawberry</span></button>
      <button className="bg-slate-200 text-white w-52 h-15"><FaHamburger className="text-red-500 animate-bounce" /> 
      <span>Vanilla</span></button>
      <button className="bg-slate-200 text-white w-52 h-15"><MdLocalCafe className="text-brown-600 animate-bounce" />
      <span>Chocolate</span></button>
      </div>
    <div className="flex  w-52 text-3xl min-h-52  flex-row items-center justify- gap-5 ">
    <FaPizzaSlice className="text-yellow-500 animate-bounce" />
   <FaHamburger className="text-red-500 animate-bounce" />
   <MdLocalCafe className="text-brown-600 animate-bounce" />
    </div>
 </div>

  );
};

export default SnackIcons;
