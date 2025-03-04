  
  export default function Home() {
    return (
  
  <div className="flex flex-row justify-between items-center gap-2 w-64">
   <Image src={"https://res.cloudinary.com/dfdy55ndo/image/upload/v1735923906/jeanee-transparent-logo_wz8kzv.png"} alt="" width={40} height={40} />
   <span className=""> <b>Hello!, Emmanuel </b>  </span>
   <button id="notification-button"><MdLocalCafe className="text-brown-600 animate-bounce" /></button>
  <button id="favorite-button">  <FaHamburger className="text-red-500 animate-bounce" /></button>
   </div>)
   }