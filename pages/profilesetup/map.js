import Image from "next/image";
import { FaHamburger } from "react-icons/fa"; // FontAwesome icons
import { MdLocalCafe } from "react-icons/md"; // Material Design icons
import { HeadingInstance } from "@/components/globals/Elements/heading";
import { ParagraphInstance } from "@/components/globals/Elements/paragraph";
import { SectionInstance } from "@/components/globals/Elements/section";
import { MainInstance } from "@/components/globals/Elements/main";
import { LinkInstance } from "@/components/globals/Elements/links";

export default function Maplocation() {
  return (
    <MainInstance customclassName={"justify-end items-end "}>
      <SectionInstance
        customclassName={
          "rounded-t-[var(--radius-md)]  gap-y-8 px-10 py-9 h-max  "
        }
      >
        
        <HeadingInstance type={"h3"} content={"Verify your location"} />
        <ParagraphInstance
          content={"This data will be displayed in your profile for security"}
        />

        <div className="bg-slate-100 rounded-2xl flex flex-col items-center justify-center h-20  px-16  ">
          
          <ParagraphInstance
            customclassName={"flex justify-start items-start"}
            content={"location"}
          />
          <ParagraphInstance content={"UG - Legon Street LG25"} />
          
        </div>
        <LinkInstance
          label={"Next"}
          text={"white"}
          customclassName={"rounded-full w-2/3"}
          href={"/chooseprofile"}
        />
      </SectionInstance>
    </MainInstance>
  );
}
