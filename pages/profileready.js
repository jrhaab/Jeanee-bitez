
import { FaHamburger } from "react-icons/fa"; // FontAwesome icons
import { MainInstance } from "@/components/globals/Elements/main";
import { SectionInstance } from "@/components/globals/Elements/section";
import { HeadingInstance } from "@/components/globals/Elements/heading";
import { ParagraphInstance } from "@/components/globals/Elements/paragraph";
import { LinkInstance } from "@/components/globals/Elements/links";


export default function Profilecomplete() {
  return (
   <MainInstance> 
        <SectionInstance> 
        <FaHamburger className="text-red-500 animate-bounce" />
      <HeadingInstance type={"h3"} content={"Congrats!"}/>
      <ParagraphInstance content={"Your profile is ready for use"}/>
      <LinkInstance
       href={".home/homepage"} label={"Next"} customclassName={"rounded-full"} text={"white"}/>
     </SectionInstance>

   
    </MainInstance>
  );
}
