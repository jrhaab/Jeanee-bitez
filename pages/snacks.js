import { FaPizzaSlice, FaHamburger } from "react-icons/fa"; // FontAwesome icons
import { MdLocalCafe } from "react-icons/md"; // Material Design icons

const SnackIcons = () => {
  return (
    
 <div className="flex  w-100 text-3xl h-100  flex-col items-center justify-between mt-52   
    "><small className="w-52">Welcome to Jeanee </small> <br />
      <small className="w-52" >Choose your favorite youghurt flavor</small>
      <div className="flex w-52 text-3xl min-h-52 flex-col items-center justify-center gap-5 ">
      <button className="bg-slate-300  rounded-2xl  text-black flex-row flex items-center justify-center gap-8  w-52 h-15"><FaPizzaSlice className="text-yellow-500 animate-bounce" />
      <div className="flex flex-col"><small>Strawberry</small><small>10 cedis</small>
        </div></button>
      <button className="bg-slate-300  rounded-2xl  text-black flex-row flex items-center justify-center gap-8 w-52 h-15"><FaHamburger className="text-red-500 animate-bounce" /> 
      <div className="flex flex-col"><small>Strawberry</small><small>10 cedis</small>
      </div></button>
      <button className="bg-slate-300  rounded-2xl  text-black flex-row flex items-center justify-center gap-8 w-52 h-15"><MdLocalCafe className="text-brown-600 animate-bounce" />
      <div className="flex flex-col"><small>Strawberry</small><small>10 cedis</small>
      </div></button>
      </div> <br />
      <span>Buy Pastries</span>
      
    <div className="flex  w-52 text-3xl min-h-52  flex-row items-center justify-center gap-5 ">
    <FaPizzaSlice className="text-yellow-500 animate-bounce" />
   <FaHamburger className="text-red-500 animate-bounce" />
   <MdLocalCafe className="text-brown-600 animate-bounce" />
    </div>
 </div>

  );
};

export default SnackIcons;
